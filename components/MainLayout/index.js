import React, { useState, useEffect } from 'react'
import SearchWeather from '../SearchWeather/index'
import Profile from '../Profile/index'
import { Stack, Box } from '@mui/material'
import Navbar from '../Navbar/index'
import dynamic from 'next/dynamic'


const BgImage = dynamic(() => import('../BgImage'), {
  ssr: false
})  


const MainLayout = () => {
  
  return (
    <>
    <Box sx = {{ marginTop: '110px' }}>
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
    <BgImage />
    </>
  
  )
}

export default MainLayout