import { Form } from "react-router-dom";
import HeaderStyles, {
  Button,
  ButtonContainer,
  Input,
  InputContainer,
} from "./Header.styles";

const Header = ({setCityName, getData}) => {

  const handleSubmit = (e)=> {
    e.preventDefault()
    getData()
    // setCityName("")
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Input onChange={(e) => setCityName(e.target.value) } />
        </InputContainer>

        <ButtonContainer>
          <Button>Search</Button>
        </ButtonContainer>
      </form>
    </div>
  );
};

export default Header;
