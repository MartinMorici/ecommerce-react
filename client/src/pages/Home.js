import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Navbar';
import Benefits from '../components/HomeLayout/Benefits';
import Barras from '../components/HomeLayout/Barras';
import Shop from '../components/HomeLayout/Shop';
import Featured from '../components/HomeLayout/Featured';
import Button from '../components/Button';

function Home() {
  return (
    <main>
      <ContainerHero>
        <HeroWrapper>
          <h2>
            Everyone's <br /> collection an<span>d style</span>
          </h2>
          <p>
            A collection of clothes with <br /> contemporary styles and <br />
            trends that make you look <br />
            even cooler.
          </p>
          <Button texto='Explore More' />
        </HeroWrapper>
      </ContainerHero>

      <Section>
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
            <img
              className='blanco'
              src='../partners/christian-dior.svg'
              alt=''
            />
          </PartnersContainer>
        </Banner>
      </Section>

      <Benefits />
      <Shop />
      <Featured />
    </main>
  );
}

const Section = styled.section`
  height: 409px;
  overflow: hidden;
  position: relative;
`;

const ContainerHero = styled.div`
  padding: 0 10.3vw;
`;

const HeroWrapper = styled.section`
  height: calc(100vh - 82px);

  display: flex;
  justify-content: center;
  flex-direction: column;

  background-image: url('../hero-section.png');
  background-repeat: no-repeat;
  background-position: right;
  background-size: 55%;
  position: relative;

  h2 {
    font-family: 'Lora', serif;
    font-weight: 400;
    font-size: 5.9vw;

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

const PartnersTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Lora', serif;
  margin-top: 2rem;
  margin-bottom: 5rem;
  h2 {
    font-size: 60px;
    font-weight: 500;
  }
  .rotado {
    transform: scaleX(-1);
  }
`;
const PartnersContainer = styled.div`
  padding: 2rem 5rem;
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
const Banner = styled.div`
  transform: rotate(-1.5deg);
  width: 101%;
  position: relative;
  left: -6px;
`;

export default Home;
