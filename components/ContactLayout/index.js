import React from 'react'
import ContactForm from '../ContactForm/index'
import { Box, Stack } from '@mui/material'
import Navbar from '../Navbar/index'

const ContactLayout = () => {
  return (
    <Box sx= {{marginTop: '110px'}}>
    <Navbar />
    <Stack
    direction='column'
    justifyContent='center'
    alignItems='center'
    sx={{
      display: { xs: 'block', sm: 'flex' },
      padding: { xs: '10px', sm: '10px' }
      }}>
      <ContactForm />
    </Stack>
  </Box>
  )
}

export default ContactLayout