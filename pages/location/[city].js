import cities from '../../components/lib/cities.json'
import Head from 'next/head'
import ResultsLayout from '../../components/ResultsLayout/index'



export async function getServerSideProps(context) {
  const city = getCity(context.params.city)

  if (!city) {
    return {
      notFound: true
    }
  }

  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${process.env.API_KEY}&units=metric`)


  const data = await res.json()


  console.log(data)
  const slug = context.params.city



  return {
    props: {
      city: city,
      weather: data.weather,
      temp: data.main,
      wind: data.wind,
      sys: data.sys
    }
  }
}

  const getCity = param => {
    const cityParam = param.trim()
    //get the id of the city
    const splitCity = cityParam.split('-')
    const id = splitCity[splitCity.length - 1]

    if (!id) {
      return '<h1>WTF => Please notify Duane immediately! When you see this message</h1>'
    }

    const city = cities.find(city => city.id.toString()  == id)

    if (city) {
      return city
    }else{
      return '<h1>WTF => Please notify Duane immediately! When you see this message</h1>'
    }

  }



export default function City({ city, weather, temp, wind, sys }) {

  return (
    <div>
      <Head>
        <title>{city.city} Weather - NextJS Weather App</title>
      </Head>
      <ResultsLayout city = {city} weather = {weather} temp = {temp} wind = {wind} sys = {sys}/>
    </div>
  )
}







