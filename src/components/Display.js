import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border-radius: 10px;
  font-size: 18px;
  color: ${props => props.gameOver ? 'red' : 'white'};
  background-color: black;
`;

function Display({ gameOver, text }) {
  return (
    <Container gameOver={gameOver}>
      {text}:
    </Container>
  );
}

export default Display;
