import styled from "styled-components";

export const Input = styled.input`
  border: none;
  outline: none;
  background: hsl(200, 100%, 6%, 0.4);
  border-bottom: 2px solid white;
  padding: 1rem;
  font-size: 2rem;
  color: white;
  margin-left: 30%;
  @media (max-width: 700px) {
    width: 90%;
    margin: auto;
  }
`;

export const ImageContainer = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
`;

export const Image = styled.img`
  width: 100px;
  border-radius: 50%;
  margin-top: 2rem;
  opacity: 0.5;
`;

export const FormContainer = styled.div`
  text-align: center;
  padding: 1rem;
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  padding: 0.5em 1em;
  border: hsl(200, 100%, 6%, 0.7);
  outline: none;
  background: hsl(200, 100%, 6%, 0.7);
  border-radius: 0.3em;
  color: white;
  font-size: 2rem;
  margin-left: 1rem;
  cursor: pointer;
  &:hover {
    transform: scale(0.97);
    transition: all 0.3s ease-in-out;
  }
  &:hover,
  :focus {
    background: hsl(200, 100%, 6%, 0.6);
    box-shadow: 0 0 5px 0 hsl(200, 100%, 6%, 0.6);
  }
  @media (max-width: 700px) {
    width: 90%;
    margin: auto;
    margin-top: 1rem;
  }
`;
