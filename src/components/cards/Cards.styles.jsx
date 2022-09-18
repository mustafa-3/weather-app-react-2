import styled from "styled-components";

export const Card = styled.div`
  width: 350px;
  height: 350px;
  background: hsl(200, 100%, 6%, 0.7);
  text-align: center;
  border-radius: 0.3rem;
`;

export const Image = styled.img`
  /* ... */
`;

export const Title = styled.div`
  display: flex;
  gap: 5px;
  font-size: 1rem;
  padding: 1rem;
`;

export const Inf = styled.h4`
  font-size: 2rem;
  font-weight: lighter;
`;

export const TempContainer = styled.div`
  display: flex;
  font-size: 2rem;
`;

export const Temp = styled.h4`
  font-size: 4rem;
  padding: 0 0 0 2rem;
`;

export const ConditionText = styled.h4`
  font-size: 2rem;
`;
