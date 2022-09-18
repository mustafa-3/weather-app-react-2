import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  outline: none;
  background: hsl(200, 100%, 6%, .4);
  border-bottom: 2px solid white;
  padding: 1rem;
  font-size: 2rem;
  color: white;
  @media (max-width:700px) {
    width: 90%;
  }
  
`;




export const ButtonContainer = styled.div`
  text-align:center;
  
`;

export const InputContainer = styled.div`
  text-align:center;
  padding: 1rem;
`;




export const Button = styled.button`
  padding: .5em 1em;
  border: hsl(200, 100%, 6%, .7);
  outline:none;
  background: hsl(200, 100%, 6%, .7);
  border-radius: .3em;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    transform: scale(.97);
    transition: all .3s ease-in-out;
  }
  &:hover,:focus {
    background: hsl(200, 100%, 6%, .6);
    box-shadow: 0 0 5px 0 hsl(200, 100%, 6%, .6);
  }
  @media (max-width:700px) {
    width: 90%;
  }
`;




