require('dotenv').config()

const sgMail = require('@sendgrid/mail')

const { SENDGRID_API_KEY } = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

export default async function handler(req, res){
  const { firstName, lastName, email, phone, radio, message } = req.body

  const msg = {
    to: 'djmuller.python.43@gmail.com',
    from: 'djmuller.python.43@gmail.com',
    subject: 'Query from Portfolio Website',
    html: `<p><strong>First Name:</strong>${firstName}</p>
           <p><strong>Last Name:</strong>${lastName}</p>
           <p><strong>Email:</strong>${email}</p>
           <p><strong>Phone Number:</strong>${phone}</p>
           <p><strong>Message: </strong>${message}</p>
    `
  }
  await sgMail.send(msg)
  res.json({ success: true })
}