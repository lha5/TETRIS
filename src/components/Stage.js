import React from 'react';

import styled from 'styled-components';

import Cell from './Cell';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-template-rows: repeat(${props => props.height}, calc(646 / ${props => props.width}));
  border: 3px solid black;
  background-color: white;
`;

function Stage({ stage, setCoordinate }) {
  const detectMovement = (event) => {
    if (event.movementX) {
      setCoordinate(event.movementX);
    }
  }
  
  return (
    <Container width={stage[0].length} height={stage.length} onMouseMove={detectMovement}>
      {stage.map(row => row.map((cell, x) => (
        <Cell key={x} type={cell[0]} />
      )))}
    </Container>
  );
}

export default Stage;
