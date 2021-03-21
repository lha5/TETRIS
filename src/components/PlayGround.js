import React, { useState } from 'react';

import { createStage } from '../gameHelpers';

import styled, { css } from 'styled-components';

import { usePlayer } from './../hooks/usePlayer';
import { useStage } from './../hooks/useStage';

import Stage from './Stage';
import Display from './Display';
import Button from './Button';

const Basic = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  ${Basic}
  width: 100vw;
  min-height: 100vh;

  div.tetris {
    ${Basic}
    flex-direction: row;
    column-gap: 20px;
    margin: 0 auto;
    text-align: center;

    aside.right-section {
      display: flex;
      min-height: 646px;
      flex-direction: column;
      row-gap: 345px;
    }
  }
`;

function PlayGround() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer] = usePlayer();
  const [stage, setStage] = useStage(player);

  const movePlayer = dir => {
    updatePlayerPos({ x: dir, y: 0 });
  }

  const startGame = () => {
    // reset
    setStage(createStage());

    resetPlayer();
  }

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false });
  }

  const dropPlayer = () => {
    drop();
  }

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      }
    }
  }

  return (
    <Container role="button" tabIndex="0" onKeyDown={event => move(event)}>
      <div className="tetris">
        <Stage stage={stage} />
        <aside className="right-section">
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div className="score-board">
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Round" />
            </div>
          )}
          <Button callback={startGame} />
        </aside>
      </div>
    </Container>
  );
}

export default PlayGround;
