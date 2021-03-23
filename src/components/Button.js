import React from 'react';

import styled from 'styled-components';

const CustomButton = styled.button`
  background-color: black;
  font-size: 26px;
  color: white;
  width: 250px;
  padding: 20px;
`;

function Button({ callback, dropTime, gameOver }) {
  return (
    <CustomButton onClick={callback}>
      {gameOver ? 'Get Started' : (dropTime === null ? 'Get Started' : 'Restart')}
    </CustomButton>
  );
}

export default Button;
