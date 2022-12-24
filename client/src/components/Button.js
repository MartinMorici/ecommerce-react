import React from 'react';
import styled from 'styled-components';
import EastIcon from '@mui/icons-material/East';

function Button({ texto, position, width, icon }) {
  return (
    <BtnWrapper>
      <Btn className={`${position} `}>
        {texto} <EastIcon />
      </Btn>
    </BtnWrapper>
  );
}

const BtnWrapper = styled.div`

  .bottom {
    position: absolute;
    bottom: 4px;
    left: 0;
    z-index: 10000;
  }
`;

const Btn = styled.button`
  cursor: pointer;
  width: 188px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #151a1e;
  color: white;
  margin-top: 3rem;
  outline: none;
  padding: 1rem;
  font-family: 'Open Sans', sans-serif;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  letter-spacing: 0.7px;
  border: none;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  svg {
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    margin-left: 0.7rem;
  }

  &:hover svg {
    transform: translateX(10px);
  }
  &:hover {
    width: 200px;
    background-color: #30373c;
  }
`;

export default Button;
