import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import Cart from './Cart';

function Navbar() {
  const [toggleCart, setToggleCart] = useState(false)

  return (
    <>
      <Header>
        <Container>
          <HeaderContainer>
            <Link to={'/'}>
              <Logo>
                <BrightnessHighIcon />
                <h1>Arrival</h1>
              </Logo>
            </Link>
            <Nav>
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
                <Link to={'/category/accessories'}>
                  <li>Accessories</li>
                </Link>
              </ul>
            </Nav>
            <Icons>
              <SearchIcon className='icons-svg' />
              <div className='carrito'>
                <LocalMallIcon className='icons-svg' onClick={() => setToggleCart(!toggleCart)} />
                <span className='icons-span'>1</span>
              </div>
              {toggleCart && <Cart/>}
            </Icons>
          </HeaderContainer>
        </Container>
      </Header>
   
    </>
  );
}

const Header = styled.header`
  font-family: 'Open Sans', sans-serif;
  padding: 1.5rem 1rem;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(41, 45, 50);
  gap: 0.6rem;
  svg {
    width: 28px;
    height: 28px;
  }
  h1 {
    font-size: 25px;
    font-weight: 600;
  }
`;

const Nav = styled.nav`
  ul li {
    display: inline-block;
    list-style: none;
    padding: 0 1.3rem;
    font-weight: 500;
    color: rgb(87, 85, 85);
    letter-spacing: 0.5px;
  }
`;

const Icons = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  .icons-svg {
    color: rgb(41, 45, 50);
  }

  .carrito {
    position: relative;
  }
  .icons-span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    font-size: 11px;
    background-color: rgb(223, 102, 102);
    color: white;
    font-weight: 800;
    position: absolute;
    top: -9px;
    right: -18px;
  }
`;

export default Navbar;
