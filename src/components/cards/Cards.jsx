// import NotFound from "../NotFound";
import CardsStyles, {
  Card,
  CardsContainer,
  ConditionText,
  Image,
  Inf,
  Temp,
  TempContainer,
  Title,
} from "./Cards.styles";

const Cards = ({ weatherData, error }) => {
  console.log(weatherData);
  if (error) {
    return <h1>City has not found</h1>;
  } else if (!weatherData) {
    return (
      <div>
        <h2>Data is Fetching</h2>
      </div>
    );
  } else {
    return (
      <div>
        <Card>
          <Title>
            <Inf>{weatherData.name}</Inf>
            <p>{weatherData.sys.country}</p>
          </Title>
          <TempContainer>
            <Temp>{Math.round(weatherData.main.temp)}</Temp>
            <p>°</p>
            <p>C</p>
          </TempContainer>
          <Image
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          />
          <ConditionText>{weatherData.weather[0].main}</ConditionText>
        </Card>
      </div>
    );
  }
};

export default Cards;
