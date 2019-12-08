import React from 'react';
import styled from 'styled-components';

const colors = ['#22CBD4', '#FEA727', '#E15188', '#F45959'];

const Container = styled.div`
  padding: 32px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: ${props => colors[props.color || 1]};
`;

const Title = styled.span`
  font-family: Muli;
  font-weight: bolder;
  font-size: 22px;
  color: white;
  margin-bottom: 16px;
`;

const Info = styled.span`
  opacity: 0.7;
  font-size: 16px;
  color: white;
  font-family: Muli;
  font-weight: 700;
  margin-bottom: 8px;
`;

export default function Card({ title, author, date, color }) {
  return (
    <Container color={color}>
      <Info>From {author}</Info>
      <Title>{title}</Title>
      <Info>{date}</Info>
    </Container>
  );
}
