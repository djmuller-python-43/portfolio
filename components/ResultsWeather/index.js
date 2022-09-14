import SearchBox from '../SearchBox'
import { Card, CardContent, Box, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStreetView } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import moment from 'moment'

function degrees_to_direction(num) {
  var val = Math.floor((num / 22.5) + 0.5);
  var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return arr[(val % 16)];
}

const ResultsWeather = ({ city, weather, temp, wind, sys }) => {

  return (
    <Box p={2} flex={6}>
      <Card sx={{ minWidth: '100%', backgroundColor: 'inherit', }}>
      <SearchBox placeholder = 'Search weather in any town in SA'/>
        <CardContent>
          <div className="main-container">
            <h2>Today&aposs Weather</h2>
            <div className="location">
              <h3><FontAwesomeIcon icon={faStreetView} /></h3>
              {<h1>{city.city}{' || '}{city.province}</h1>}
            </div>
            <div className="weather-icon">
              <Image
                      width={80}
                      height={80}
                      src={`https://openweathermap.org/img/wn/${weather[0]['icon']}@2x.png`} 
                      alt={weather[0]['description']} layout='intrinsic'/>
            </div>
            <Typography variant="body1" color="text.secondary">
                {<h3>{ weather[0]['description'] }</h3>}
              </Typography>
            <div className="temperature">
              <h1>{temp.temp.toFixed(0)}&#8451;</h1>
            </div>
            <h5>sunrise: {moment.unix(sys.sunrise).format('LT')}</h5>
            <h5>sunset: {moment.unix(sys.sunset).format('LT')}</h5>
            <h5 className = 'extra'>Wind Speed: {Math.ceil(wind.speed*3.6)} Km/h || Wind direction: {degrees_to_direction(wind.deg)} || Humidity: { temp.humidity }%</h5>
          </div>
        </CardContent>
      </Card>
    </Box>
  )
}

export default ResultsWeather