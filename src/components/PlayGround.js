import React, { useState } from 'react';

import styled, { css } from 'styled-components';

import { createStage } from './../gameHelpers';

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
  height: 100vh;

  div.tetris {
    ${Basic}
    flex-direction: row;
    column-gap: 20px;
    margin: 0 auto;
    text-align: center;

    aside.right-section {
      display: flex;
      flex-direction: column;
      row-gap: 200px;
    }
  }
`;

function PlayGround() {
  const [GetStarted, setGetStarted] = useState(true);

  return (
    <Container>
      <div className="tetris">
        <Stage GetStarted={GetStarted} setGetStarted={setGetStarted} stage={createStage()} />
        <aside className="right-section">
          <div className="score-board">
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Round" />
          </div>
          <Button GetStarted={GetStarted} setGetStarted={setGetStarted} />
        </aside>
      </div>
    </Container>
  );
}

export default PlayGround;
