import React, { useState } from 'react'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import Toast from '../Toast'
  





const ContactForm = () => {

  const [list, setList] = useState([])
  let toastProperties = null

  const showToast = () => {

    toastProperties = {
      id: 1,
      title: 'Success',
      description: 'Your message has been sent successfully',
      backgroundColor: '#001e3c',
      color: 'rgb(207,204,204)',
    }
    setList([toastProperties])
  }

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const { firstName, lastName, email,phone, radio, message } = values

  const handleChange = e => setValues({
    ...values,
    [e.target.name]: e.target.value
  })


  const sendMail = async (e) => {
    e.preventDefault();

    try {
      await fetch('http://localhost:3000/api/sendgrid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
    } catch(err) {
      console.log(err)
    }
    setValues({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    })
  }


  return (
    <>
      <Head>
        <title>Contact Form</title>
        <link rel='icon' href='favicon.ico' />
      </Head>
      <h3>Any questions? Just write us a message!</h3>
      <div className="contact-container">
        <div className="contact-info">
        <h4>Contact Information</h4>
        <p>Please complete the form,</p>
        <p>we\'ll get back to you within 24hrs</p>
        <div className="icon-text">
        <FontAwesomeIcon icon={faPhone} className='icon' />
          <span>+27 60 325 6105</span>
        </div>
        <div className="icon-text">
        <FontAwesomeIcon icon={faEnvelope} className='icon'/>
          <span>djmuller.python.43@gmail.com</span>
        </div>
        <div className="icon-text">
        <FontAwesomeIcon icon={faMapMarker} className='icon'/>
          <span>Paul Roux, Free State</span>
        </div>
        </div>
        <form onSubmit={sendMail} method = 'post'>
          <div className="col">
            <div className="form-group">
              <label>First Name</label>
              <input value = {firstName} name = 'firstName' type='text' onChange = { handleChange } required/>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input value = {lastName} name = 'lastName' type='text' onChange = { handleChange }required/>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label>Email</label>
              <input value = {email} name = 'email' type='email' onChange = { handleChange } required/>
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input value = {phone} name = 'phone' type='tel'onChange = { handleChange } required/>
            </div>
          </div>
          <div className="col">
            <div className="form-group solo">
              <label>Message</label>
             <textarea value = { message } name = 'message' rows = '5' onChange = { handleChange }></textarea>
            </div>
          </div>
          <div className="col">
            <div className="form-group solo right">
              <button onClick = { () => showToast('success') } className='primary'>Send Message</button>
            </div>
          </div>
        </form>
        <Toast toastlist = { list } position = 'button-right' setList = { setList }/>
      </div>
    </>
  )
}

export default ContactForm