import React from 'react';
import styled from 'styled-components';
import Barras from './Barras';
import { Container } from '../Navbar';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LockIcon from '@mui/icons-material/Lock';

function Benefits() {
  return (
    <BenefitsContainer>
      <Container>
        <Texto>
          <h2>
            <span className='italica'>Benefits</span> of choosing{' '}
            <br className='brH2' /> our services
          </h2>
          <p>
            We provide free shipping anywhere as <br /> long as you spend more
            than $50.
          </p>
          <div className='oculto-mobile'>
            <Barras rotado='rotado' />
          </div>
          <div className='oculto'>
            <Barras />
          </div>
        </Texto>
        <Cards>
          <article>
            <LocalShippingIcon />
            <h3>Free Shipping</h3>
            <p>
              We provide free shipping <br /> as long as you shop <br /> here
              for more than $50.
            </p>
            <div className=' barra arriba'></div>
          </article>
          <article>
            <RocketLaunchIcon />
            <h3>Fast Delivery</h3>
            <p>
              We provide super fast couriers
              <br /> to send your goods in less
              <br /> than 1 day to your home.
            </p>
            <div className='barra medio'></div>
          </article>
          <article>
            <LockIcon />
            <h3>Long Warranty</h3>
            <p>
              If there is damage to the <br /> goods we also have a long <br />
              enough warranty for you.
            </p>
            <div className=' barra abajo'></div>
          </article>
        </Cards>
      </Container>
    </BenefitsContainer>
  );
}

const BenefitsContainer = styled.section`
  margin: 8rem 0rem 10rem 0rem;
  padding: 0rem 1rem;
  .oculto {
    display: none;
  }
  h2 {
    font-family: 'Lora', serif;
    font-weight: 500;
  }
  .italica {
    font-style: italic;
    font-weight: 800;
  }
  .rotado {
    transform: scaleX(-1);
  }
  @media (max-width: 880px) {
    margin: 3rem 0rem 10rem 0rem;
  }
  @media (max-width: 650px) {
    margin: 6rem 0rem 10rem 0rem;
  }

`;
const Texto = styled.div`
  display: flex;
  gap: 6rem;
  align-items: center;
  @media (max-width: 940px) {
    flex-direction: column;
    gap: 1rem;
    p {
      align-self: flex-start;
    }
    .barra {
      align-self: flex-end;
    }
    .oculto-mobile {
      display: none;
    }
    .oculto {
      display: block;
      align-self: flex-start;
    }
  }
  h2 {
    font-size: 60px;
    @media (max-width: 940px) {
      font-size: 44px;
      .brH2 {
        display: none;
      }
    }
    @media (max-width: 600px) {
      font-size: 32px;
      margin-top: 2rem;
    }
  }
  p {
    color: #4e4f50;
    border-left: 2px solid #96989a;
    padding: 2rem 0rem 2rem 2rem;
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    @media (max-width: 600px) {
      padding: 1rem 0rem 1rem 1rem;
      font-size: 18px;
      br {
        display: none;
      }
    }
  }
  @media (max-width: 650px) {
    .oculto .contenedorBarras{
      width: 60vw;
    }
  }
`;

const Cards = styled.section`
  display: flex;
  margin-top: 4rem;
  gap: 10rem;
  @media (max-width: 1260px) {
    gap: 0;
    justify-content: space-between;
  }
  @media (max-width: 946px) {
    flex-wrap: wrap;
    gap: 3rem;
  }
  @media (max-width: 660px) {
    align-items: flex-start;
    flex-direction: column;
    article {
      width: 300px;
    }
  }
  article {
    position: relative;
    padding: 0rem 2rem;
    border-left: 2px solid #96989a;
    svg {
      font-size: 40px;
      margin-bottom: 1.5rem;
    }
    h3 {
      font-family: 'Lora', serif;
      font-size: 32px;
      font-weight: 600;
      margin-bottom: 1.5rem;
      letter-spacing: 1px;
    }
    p {
      font-size: 17px;
      font-family: 'Open Sans', sans-serif;
      color: #4e4f50;
      font-weight: 300;
      letter-spacing: 0.5px;
    }
    .barra {
      position: absolute;
      left: -4px;
      width: 6px;
      border-radius: 15px;
      background-color: #151a1e;
      height: 66px;
    }
    .arriba {
      left: -4px;
      top: 0;
    }
    .abajo {
      bottom: 0px;
    }
    .medio {
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;

export default Benefits;
