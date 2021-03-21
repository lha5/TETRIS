import React from 'react';

import styled from 'styled-components';

import { TETROMINOS } from '../tetrominos';

const Container = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => props.color};
  border: 1px solid #ccc;
`;

function Cell({ type }) {
  return (
    <Container type={type} color={TETROMINOS[type].color} />
  );
}

export default React.memo(Cell);
