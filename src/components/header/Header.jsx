import { Form } from "react-router-dom";
import HeaderStyles, {
  Button,
  FormContainer,
  Image,
  ImageContainer,
  Input,
  Title,
} from "./Header.styles";
import WeatherImg from "../../assets/weather-icon.jpg";

const Header = ({ setCityName, getData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    // setCityName("")
  };

  return (
    <div>
      <ImageContainer>
        <Image src={WeatherImg} />
      </ImageContainer>
      <Title>Weather App</Title>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <Input
            placeholder="Search for a city.."
            required
            onChange={(e) => setCityName(e.target.value)}
          />
          <Button>Search</Button>
        </FormContainer>
      </form>
    </div>
  );
};

export default Header;
