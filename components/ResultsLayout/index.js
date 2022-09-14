import React from 'react'
import ResultsWeather from '../ResultsWeather/index'
import Profile from '../Profile/index'
import { Box, Stack } from '@mui/material'
import Navbar from '../Navbar/index'

const ResultsLayout = ({ city, weather, temp, wind, sys }) => {
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
      <ResultsWeather city = {city} weather = {weather} temp = {temp} wind = {wind} sys = {sys} />
      <Profile />
    </Stack>
  </Box>
  )
}

export default ResultsLayout