import React from 'react';
import styled from 'styled-components';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, resetCart, toggleCart } from '../redux/features/cartSlice';

function Cart() {
  const {cartItems,isOpen} = useSelector((store) => store.cart);
  const dispatch = useDispatch()

  const calcularTotal = () => {
    let total = 0
    cartItems.forEach(item => {
      total += item.cant * item.price
    });
    return total.toFixed(2);
  }

  return (
    <CartWrapper>
      <div>
        <div className='header'>
          <h2>{cartItems.length === 0 ? 'No products in your cart' : 'Products in your cart'}</h2>
          <CloseIcon className='closeIcon' onClick={() => dispatch(toggleCart(!isOpen))}></CloseIcon>
        </div>
        {cartItems.map((item) => {
          return (
            <div className='producto-carrito' key={item.id}>
              <img className='img-producto' src={item.img} alt='' />
              <div className='info-producto'>
                <p className='nombre-producto'>{item.title}</p>
                <p>{item.desc}</p>
                <p className='precio-producto'>
                  {item.cant} x ${item.price}
                </p>
              </div>
              <DeleteOutlineSharpIcon className='borrar-producto' onClick={ () => dispatch(removeItem(item.id))} />
            </div>
          );
        })}
        <div className='subtotal'>
          <span>SUBTOTAL</span> ${calcularTotal()}
        </div>
        <button className='checkout'>PROCEED TO CHECKOUT</button>
        <div className='clear' onClick={ () => dispatch(resetCart())}>Clear Cart</div>
      </div>
    </CartWrapper>
  );
}

const CartWrapper = styled.div`
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .closeIcon{
      transform: translateY(-6px);
      color: lightsteelblue;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
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
        font-size: 18px;
      }
      .precio-producto {
        font-weight: 600;
        color: #151a1e;
      font-size:16px;      }
      p{
        font-size: 13px;
        margin: 0.3rem 0rem;
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
    cursor: pointer;
  }
  @media (max-width: 536px) {
    width: 300px;
  }
`;

export default Cart;
