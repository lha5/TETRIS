import React from 'react';

import styled from 'styled-components';

import Cell from './Cell';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-template-rows: repeat(${props => props.height}, calc(646 / ${props => props.width}));
  border: 3px solid black;
  background-color: white;
  position: relative;

  .game-over {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: red;
    text-shadow: -2px 0 white, 0 2px white, 2px 0 white, 0 -2px white;
  }
`;

function Stage({ gameOver, stage, setCoordinate }) {
  const delay = (ms) => {
    const now = new Date().getTime();

    while (new Date().getTime() < now + ms) {}
  }

  const detectMovement = (event) => {
    if (event.movementX) {
      if (event.movementX > -3 && event.movementX < 3) {
        delay(50);
        
        setCoordinate(event.movementX);
      }
    }
  }
  
  return (
    <Container width={stage[0].length} height={stage.length} onMouseMove={detectMovement}>
      {gameOver && <div className="game-over">Game Over</div>}
      {stage.map(row => row.map((cell, x) => (
        <Cell key={x} type={cell[0]} />
      )))}
    </Container>
  );
}

export default Stage;
