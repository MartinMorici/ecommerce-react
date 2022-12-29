import React from 'react';
import styled from 'styled-components';
import Barras from './Barras';

function Partners() {
  return (
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
          <img className='blanco' src='../partners/christian-dior.svg' alt='' />
        </PartnersContainer>
      </Banner>
    </Section>
  );
}

const Section = styled.section`
  height: 409px;
  overflow: hidden;
  position: relative;
  @media (max-width: 900px) {
    height: auto;
  }
`;

const PartnersTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Lora', serif;
  margin-top: 2rem;
  margin-bottom: 5rem;
  @media (max-width: 706px) {
    margin: 2rem 0rem;
    text-align: center;
  }
  h2 {
    font-size: 60px;
    font-weight: 500;
    @media (max-width: 706px) {
      font-size: 30px;
      margin: 1rem 0rem;
    }
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
  @media (max-width: 950px) {
    padding: 1rem;
    img:nth-child(4) {
      width: 15%;
    }
    img {
      width: 10%;
    }
  }
  @media (max-width: 450px) {
    padding: 1rem;
    img:nth-child(4) {
      width: 20%;
    }
    img {
      width: 15%;
    }
  }

  background-color: #151a1e;
`;
const Banner = styled.div`
  transform: rotate(-1.5deg);
  width: 101%;
  position: relative;
  left: -6px;
  @media (max-width: 800px) {
    transform: rotate(0);
    position: unset;
  }
`;

export default Partners;
