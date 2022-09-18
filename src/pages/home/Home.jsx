import { useEffect } from 'react'
import { useState } from 'react'
import Cards from '../../components/cards/Cards'
import { GlobalStyles } from '../../components/GlobalStyles'
import Header from '../../components/header/Header'
import HomeContainer from './Home.styles'
import HomeStyles from './Home.styles'
import axios from 'axios'

const Home = () => {
  const API_KEY = "aa38f38180351269c73dbca473efca33"
  const Unit = "metric"
  const [cityName, setCityName] = useState()
  const [weatherData, setWeatherData] = useState([])
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=${Unit}`

  const getData = async() => {
    const response = await axios(url)
    const {main, name, sys, id,weather} = response.data;
    setWeatherData([...weatherData, {main, name, sys, id,weather} ])

  }

  // console.log(weatherData);

  return (
    <HomeContainer>
      <GlobalStyles/>
      <Header setCityName={setCityName} getData={getData}/>
      {weatherData?.map((item,index) => (<Cards weatherData={item} key={index}/>))}
      
    </HomeContainer>
  )
}

export default Home