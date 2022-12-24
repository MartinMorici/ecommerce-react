import React from 'react';
import styled from 'styled-components';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';

function Cart() {
  return (
    <CartWrapper>
      <div>
        <h2>Products in your cart</h2>
        <div className='producto-carrito'>
          <img className='img-producto' src='../cart-example.jpg' alt='' />
          <div className='info-producto'>
            <p className='nombre-producto'>Printed T-shirt</p>
            <p>
              T-shirt in soft cotton jersey with a printed graphic design and
              crew neck.
            </p>
            <p className='precio-producto'>1 x $19.99</p>
          </div>
          <DeleteOutlineSharpIcon className='borrar-producto' />
        </div>
        <div className='subtotal'>
          <span>SUBTOTAL</span> $19.99
        </div>
        <button className='checkout'>PROCEED TO CHECKOUT</button>
        <div className='clear'>Clear Cart</div>
      </div>
    </CartWrapper>
  );
}

const CartWrapper = styled.div`
  h2 {
    margin-bottom: 1rem;
    font-weight: 600;
  }

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: absolute;
  z-index: 4;
  top: 40px;
  right: 0;
  width: 500px;
  padding: 1rem;
  background-color: white;
  .producto-carrito {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 1.5rem;
    .info-producto {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .nombre-producto {
        font-weight: 600;
      }
      .precio-producto {
        font-weight: 600;
        color: #151a1e;
      }
    }
  }
  .img-producto {
    width: 80px;
    object-fit: cover;
  }
  .subtotal {
    display: flex;
    justify-content: space-between;
    font-weight: 800;
    font-size: 18px;
  }
  .borrar-producto {
    align-self: center;
    color: #db6666;
  }
  .checkout {
    margin-top: 1rem;
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    align-items: center;
    width: 12rem;
    border: none;
    outline: none;
    padding: 0.5rem 0rem;
    font-size: 13px;
    font-family: 'Open Sans', sans-serif;
    color: white;
    background-color: #151a1e;
  }
  .clear {
    margin-top: 1.5rem;
    font-size: 15px;
    color: #db6666;
  }
  @media (max-width: 536px) {
    width: 300px;
  }
`;

export default Cart;
