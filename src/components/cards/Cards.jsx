import CardsStyles, { Card } from './Cards.styles'

const Cards = ({weatherData}) => {
  console.log(weatherData);
  return (
    <Card>
      <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
    </Card>
  )
}

export default Cards