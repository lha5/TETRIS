import React, { useState } from 'react';

import { createStage, checkCollision } from '../gameHelpers';

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

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  }

  const startGame = () => {
    // reset
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  }

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // game over
      if (player.pos.y < 1) {
        console.log('GAME OVER');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
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
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
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
