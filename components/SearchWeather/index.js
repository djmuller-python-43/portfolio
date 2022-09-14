import Rain from '../Rain/index'
import SearchBox from '../SearchBox/index'
import { Typography, Box } from '@mui/material'


const SearchWeather = () => {

 

  

  return (
    <Box p={4} flex={6}>
      <Typography variant='h5' sx = {{fontFamily: 'Indie Flower, cursive', marginBottom: '30px'}}>
        Check out the latest weather from any town in SA
      </Typography>
      <SearchBox placeholder = 'Search weather in any town in SA'/>
      <box pt = { 2 } flex = { 12 }>
        <Rain />
      </box>
    </Box>
  )
}



export default SearchWeather
