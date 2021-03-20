import React from 'react';

import styled from 'styled-components';

import { TETROMINOS } from '../tetrominos';

const Container = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => props.color};
  border: ${props => props.type === 0 ? '1px solid #ccc' : '1px solid #999'};
`;

function Cell({ type }) {
  return (
    <Container type={type} color={TETROMINOS[type].color} />
  );
}

export default Cell;
