import React from 'react';
import styled from 'styled-components';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import { Container } from './Navbar';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterPage>
      <Container>
        <FooterContainer>
          <div>
            <div className='footerTitle'>Menu</div>
            <ul>
              <Link to={'/'}>
                <li>Home</li>
              </Link>
              <Link to={'/category/men'}>
                <li>Men</li>
              </Link>
              <Link to={'/category/women'}>
                <li>Women</li>
              </Link>
              <Link to={'/category/children'}>
                <li>Children</li>
              </Link>
            </ul>
          </div>
          <div>
            <div className='footerTitle'>Help</div>
            <ul>
              <li>Customer services</li>
              <li>Virtual assistant</li>
              <li>Shop location</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div>
            <div className='footerTitle'>FAQs</div>
            <ul>
              <li>Information</li>
              <li>Payment</li>
              <li>Shipping</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <div className='footerTitle'>Social Media</div>
            <ul>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>YouTube</li>
            </ul>
          </div>
        </FooterContainer>
        <Divisor />
        <FinalFooter>
          <Logo>
            <BrightnessHighIcon />
            <div>Sunset</div>
          </Logo>

          <div>
            Desarrollado por <a href='https://www.linkedin.com/in/martinmorici/'>Martín Morici</a>
          </div>
        </FinalFooter>
      </Container>
    </FooterPage>
  );
}

const FooterPage = styled.footer`
  background-color: #151a1e;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  padding: 3rem 0rem;
`;

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0rem;
  color: white;

  li {
    list-style: none;
    margin-bottom: 1rem;
    font-weight: 300;
    letter-spacing: 0.5px;
  }
  .footerTitle {
    margin-bottom: 2rem;
    font-size: 18px;
    font-weight: 600;
  }
`;

const Divisor = styled.div`
  width: 100%;
  height: 2px;
  background-color: rgb(79, 83, 86);
  margin-bottom: 2rem;
`;

const FinalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  a {
    text-decoration: underline;
    color: white;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  div {
    font-size: 25px;
    margin-left: 0.6rem;
    font-weight: 600;
  }
`;

export default Footer;
