import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import Cart from './Cart';
import { useSelector, useDispatch } from 'react-redux';
import { Twirl as Hamburger } from 'hamburger-react';

import { toggleCart } from '../redux/features/cartSlice';

function Navbar() {
  const dispatch = useDispatch();
  const { cartItems, isOpen } = useSelector((store) => store.cart);
  const [openNav, setOpenNav] = useState(false)
  const btnRef = useRef();
  const location = useLocation();
  
  useEffect(() => {
    setOpenNav(false)
  }, [location])
  

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
            <Icons className={`${openNav ? 'white' : ''}`} >
              <div
                className={`carrito`}
                ref={btnRef}
                onClick={() => dispatch(toggleCart(!isOpen))}
              >
                <LocalMallIcon className='icons-svg' />
                <span className='icons-span'>{cartItems.length}</span>
              </div>
              {isOpen && <Cart />}
              <Hamburger toggled={openNav} toggle={setOpenNav} size={23} hideOutline={false} />
            </Icons>
          </HeaderContainer>
        </Container>

          <NavResponsive className={openNav ? 'active' : ''} >
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
          </NavResponsive>
      </Header>
    </>
  );
}

const Header = styled.header`
  font-family: 'Open Sans', sans-serif;
  padding: 1.5rem 1rem;
  .active{
    transform:translateX(0%);
    transition: 0.5s ;
  }
  .white{
    color: white;
    .hamburguer-react{
      color: white;
    }
  }
`;
const NavResponsive = styled.nav`
display: flex;
justify-content: center;
align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  z-index: 2;
  transform: translateX(101%);
  background-color: #151a1e;
  transition: 1s;
  ul{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
  ul li {
    color: white;
    list-style: none;
    padding: 0 1.3rem;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.5px;
  }
 
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
  @media (max-width: 690px) {
    display: none;
  }
`;

const Icons = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  .icons-svg {
    cursor: pointer;
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
  .hamburger-react {
    display: none;
    z-index: 3;
  }
  @media (max-width: 690px) {
    .hamburger-react {
      position: fixed;
      display: block;
      margin-left: 1rem;
    }
  }
  @media (max-width: 400px) {
  }
`;

export default Navbar;
