import styled from 'styled-components';

const HomeContainer = styled.div`
  background-image: url(https://source.unsplash.com/random) ;
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default HomeContainer;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
  text-align:center
  
 
  
  /* background-color: #333; */
  
  /* padding: 10px; */
`;