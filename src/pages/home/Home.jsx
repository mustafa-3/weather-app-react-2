import { useEffect } from "react";
import { useState } from "react";
import Cards from "../../components/cards/Cards";
import { GlobalStyles } from "../../components/GlobalStyles";
import Header from "../../components/header/Header";
import HomeContainer from "./Home.styles";
import HomeStyles from "./Home.styles";
// import axios from 'axios'

const Home = () => {
  const [cityName, setCityName] = useState();
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(false);
  const API_KEY = "aa38f38180351269c73dbca473efca33";
  const Unit = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=${Unit}`;

  const getData = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        setError(true);
        throw new Error("Something went wrong");
      }
      const { weather, sys, main, name } = await res.json();
      setWeatherData([...weatherData, { weather, sys, main, name }]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HomeContainer>
      <GlobalStyles />
      <Header setCityName={setCityName} getData={getData} />
      {weatherData?.map((item, index) => (
        <Cards weatherData={item} key={index} error={error} />
      ))}
    </HomeContainer>
  );
};

export default Home;
