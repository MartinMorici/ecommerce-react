import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Navbar';
import EastIcon from '@mui/icons-material/East';
import Barras from '../components/Barras';
function Home() {
  return (
    <section>
      <Container>
        <HeroWrapper>
          <h2>
            Everyone's <br /> collection an<span>d style</span>
          </h2>
          <p>
            A collection of clothes with <br /> contemporary styles and <br />
            trends that make you look <br />
            even cooler.
          </p>
          <Button>
            Explore More <EastIcon />
          </Button>
        </HeroWrapper>
      </Container>
      <PartnersTitle>
        <Barras />
        <h2>Trusted partners</h2>
        <Barras rotado={'rotado'} />
      </PartnersTitle>
      <Banner>
        <PartnersContainer>
          <img src='../partners/chanel.svg' alt='' />
          <img src='../partners/gucci.svg' alt='' />
          <img src='../partners/louis-vuitton.svg' alt='' />
          <img className='blanco' src='../partners/christian-dior.svg' alt='' />
        </PartnersContainer>
      </Banner>
    </section>
  );
}

const HeroWrapper = styled.div`
  margin: 3rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url('../hero-section.png');
  background-repeat: no-repeat;
  background-position: right;
  background-size: 55%;
  position: relative;
  h2 {
    font-family: 'Lora', serif;
    font-weight: 400;
    font-size: 6vw;
    span {
      color: white;
    }
  }

  p {
    margin-top: 1rem;
    padding: 2rem 2rem;
    font-family: 'Lato', sans-serif;
    font-family: 'Open Sans', sans-serif;
    border-left: 1px solid rgb(41, 45, 50);
    color: #737678;
    font-size: 24px;
    font-weight: 300;
  }
`;

const Button = styled.button`
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
  svg {
  }
`;

const PartnersTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Lora', serif;
  margin-top: 8rem;
  margin-bottom: 3rem;
  h2 {
    font-size: 60px;
    font-weight: 500;
  }
  .rotado {
    transform: scaleX(-1);
  }
`;
const PartnersContainer = styled.div`
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-around;
  img:nth-child(4) {
    width: 9%;
  }

  img {
    width: 6%;
    object-fit: contain;
    color: white;
  }
  .blanco {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(265deg)
      brightness(107%) contrast(103%);
  }
  background-color: #151a1e;
`;
const Banner = styled.div``;

export default Home;
