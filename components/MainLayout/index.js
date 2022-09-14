import React, { useState, useEffect } from 'react'
import SearchWeather from '../SearchWeather/index'
import Profile from '../Profile/index'
import { Box, Stack } from '@mui/material'
import Navbar from '../Navbar/index'




const MainLayout = () => {
  
  return (
    
      <Box sx= {{marginTop: '110px'}}>
      <Navbar />
        <h1>Duane Muller&apos;s Portfolio</h1>
        
      <Stack
      direction='row'
      justifyContent='space-evenly'
      sx={{
        display: { xs: 'block', sm: 'flex' },
        padding: { xs: '10px', sm: '10px' }
        }}>
        <SearchWeather />
        <Profile />
      </Stack>
    </Box>
  
  )
}

export default MainLayout