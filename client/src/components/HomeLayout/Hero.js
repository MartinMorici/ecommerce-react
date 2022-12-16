import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

function Hero() {
  return (
    <ContainerHero>
      <HeroWrapper>
        <div>
          <h2>
            Everyone's <br className='brHero' /> collection an
            <span>d style</span>
          </h2>
          <p>
            A collection of clothes with <br className='brHero' /> contemporary
            styles and <br className='brHero' />
            trends that make you look <br className='brHero' />
            even cooler.
          </p>
          <Button texto='Explore More' />
        </div>
        <img className='img-hero' src='../hero-section.png' alt='' />
      </HeroWrapper>
    </ContainerHero>
  );
}

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

  .img-hero {
    display: none;
  }
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
  @media (max-width: 1000px) {
    background-image: none;
    flex-direction: row;
    align-items: center;
    .img-hero {
      display: block;
      width: 60%;
      object-fit: contain;
    }
    h2 span {
      color: black;
    }
    .brHero {
      display: none;
    }
  }
  @media (max-width: 850px) {
    flex-direction: column;
    margin-top: 5rem;
    margin-bottom: 3rem;
    gap: 2rem;
    height: auto;
    .img-hero {
      width: 100%;
    }
    h2 {
      font-size: 50px;
    }
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 35px;
    }
    p {
      font-size: 20px;
    }
  }
`;

export default Hero;
