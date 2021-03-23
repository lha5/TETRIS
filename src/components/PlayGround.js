import React, { useEffect, useState } from 'react';

import { createStage, checkCollision } from '../gameHelpers';

import styled, { css } from 'styled-components';

import { usePlayer } from './../hooks/usePlayer';
import { useStage } from './../hooks/useStage';
import { useInterval } from './../hooks/useInterval';
import { useGameStatus } from './../hooks/useGameStatus';

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
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

  const [coordinate, setCoordinate] = useState(0);
  
  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  }

  // reset game
  const startGame = () => {
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(0);
  }

  const drop = () => {
    // increase level when player has cleard 10 rows
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);

      // also increase speed
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // game over
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  }

  // move tetromino with moving mouse
  useEffect(() => {
    if (!gameOver) {
      if (coordinate > 0) {
        movePlayer(1);
      } else if (coordinate < 0) {
        movePlayer(-1);
      }
    }
  }, [coordinate]);

  // drop tetromino every second(in level 0)
  useInterval(() => {
    drop();
  }, dropTime);

  return (
    <Container>
      <div className="tetris">
        <Stage stage={stage} setCoordinate={setCoordinate} gameOver={gameOver} />
        <aside className="right-section">
          <div className="score-board">
            <Display text={`Score: ${score}`} />
            <Display text={`Rows: ${rows}`} />
            <Display text={`Round: ${level}`} />
          </div>
          <Button callback={startGame} gameOver={gameOver} dropTime={dropTime} />
        </aside>
      </div>
    </Container>
  );
}

export default PlayGround;
