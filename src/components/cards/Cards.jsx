import NotFound from "../NotFound";
import CardsStyles, { Card } from "./Cards.styles";

const Cards = ({ weatherData, error }) => {
  console.log(weatherData);
  if (error) {
    return <NotFound />;
  } else if (!weatherData) {
    return (
      <div>
        <h2>Data is Fetching</h2>
      </div>
    );
  } else {
    return <div>asd</div>;
  }
};

export default Cards;
