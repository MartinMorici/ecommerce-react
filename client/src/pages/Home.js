import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Navbar';
import EastIcon from '@mui/icons-material/East';
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
  background-position: right ;
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
max-width: 188px;
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
  svg {
    margin-left: 0.7rem;
  }
`;

export default Home;
