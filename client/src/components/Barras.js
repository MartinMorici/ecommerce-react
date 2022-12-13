import React from 'react';
import styled from 'styled-components';

function Barras({ rotado }) {
  return (
    <Barra className={rotado}>
      <div className='mid'></div>
      <div className='full'></div>
      <div className='short'></div>
    </Barra>
  );
}

const Barra = styled.div`
  width: 13.3vw;
  div {
    height: 2px;
  }
  .mid {
    width: 80%;
    background-color: #d99ca0;
  }
  .full {
    width: 100%;
    background-color: #583d2e;
    margin: 27px 0px;
  }
  .short {
    width: 50%;
    background-color: #d99ca0;
  }
`;

export default Barras;
