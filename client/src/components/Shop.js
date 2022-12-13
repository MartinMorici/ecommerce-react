import React from 'react';
import styled from 'styled-components';
import { Container } from './Navbar';
import Barras from './Barras';
import Button from './Button';

function Shop() {
  return (
    <ShopContainer>
      <Barras derecha={'derecha'} rotado={'rotado'} />
      <Container>
        <FlexContainer>
          <div className='texto'>
            <h3>
              Don't miss out on this <span>latest and greatest</span> styles!
            </h3>
            <p>
              The latest and best men's and women's styles will make you look
              like never before. Feel the quality of every product.
            </p>
          </div>

          <article>
            <img src='./shop-men.jpg' alt='' />
            <Button texto={'Men'} position={'bottom'} />
          </article>

          <article>
            <img src='./shop-women.jpg' alt='' />
            <Button texto={'Women'} position={'bottom'} />
          </article>
        </FlexContainer>
      </Container>
      <Barras />
    </ShopContainer>
  );
}

const ShopContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  color: white;
  background-color: #151a1e;
  margin-bottom: 3rem;
  h3 {
    font-family: 'Lora', serif;
    font-weight: 400;
    span {
      font-style: italic;
      font-weight: 600;
    }
  }
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  article {
    position: relative;
  }
  h3 {
    font-size: 58px;
  }
  .texto {
    width: 28%;
  }
  img {
    width: 400px;
    object-fit: cover;
  }
  p {
    font-size: 22px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    margin-top: 2.4rem;
    padding: 2rem 0rem 2rem 2rem;
    border-left: 1px solid grey;
    letter-spacing: 0.5px;
    line-height: 1.5;
  }
`;

export default Shop;
