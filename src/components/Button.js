import React from 'react';

import styled from 'styled-components';

const CustomButton = styled.button`
  background-color: black;
  font-size: 26px;
  color: white;
  width: 250px;
  padding: 20px;
`;

function Button({ callback }) {
  return (
    <CustomButton onClick={callback}>
      Get Started
    </CustomButton>
  );
}

export default Button;
