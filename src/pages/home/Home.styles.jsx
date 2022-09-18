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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  /* text-align:center */
  
 
  
  /* background-color: #333; */
  
  /* padding: 10px; */
`;