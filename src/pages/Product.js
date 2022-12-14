import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../components/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/features/cartSlice';

function Product() {
  const dispatch = useDispatch();
  const [producto, setProducto] = useState();
  const [cantidad, setCantidad] = useState(1);
  const [selectedImg, setSelectedImg] = useState();
  const [addedToCart, setAddedToCart] = useState(false)
  const { id } = useParams();
  const {productos} = useSelector((state) => state.productos)
  const idProd = parseInt(id);

  useEffect(() => {
    window.scrollTo(0, 0);
    const productoActual = productos.find((product) => product.id === idProd);
    setProducto(productoActual);
    setSelectedImg(
    productoActual.img
    );
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAddedToCart(false)
    }, 1000);

    return () => {
      clearTimeout(timer)
    }
  }, [addedToCart])
  

  const addToCartHandler = () => {
    setAddedToCart(true);
    dispatch(addToCart({
      id: producto.id,
      title: producto?.title,
      img: producto.img,
      price: producto?.price,
      desc: producto?.desc,
      cant: cantidad
    }))
  }
  

  return (
    <ProductWrapper>
      <Container>
        { producto &&  (
          <ContainerProduct>
            <ContainerImgs>
              <div>
                <img
                  src={
                    producto.img
                  }
                  className={(selectedImg === producto.img ) ? 'active': ''}
                  onClick={(e) => setSelectedImg(e.target.src)}
                  alt={producto?.title}
                />
                <img
                  src={
                    producto.img2
                  }
                  onClick={(e) => setSelectedImg(e.target.src)}
                  className={(selectedImg === producto.img2 ) ? 'active': ''}
                  alt={producto?.title}
                />
                {producto?.img3 && (
                  <img
                    src={
                      producto.img3
                    }
                    className={(selectedImg === producto.img3 ) ? 'active': ''}
                    onClick={(e) => setSelectedImg(e.target.src)}
                    alt={producto?.title}
                  />
                )}
              </div>
              <img
                className='imgGrande'
                src={selectedImg}
                alt={producto.title}
              />
            </ContainerImgs>

            <ContainerInfo>
              <div>
                <h2>{producto.title}</h2>
                <span className='price'>${producto.price}</span>
                <p>{producto.desc}</p>
              </div>

              <div className='amount'>
                <button
                  onClick={() =>
                    setCantidad((prev) => (cantidad === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                <span>{cantidad}</span>
                <button onClick={() => setCantidad((prev) => prev + 1)}>
                  +
                </button>
              </div>

              <div className='boton'>
                <button className='addToCart' onClick={addToCartHandler}>
                  <ShoppingCartIcon></ShoppingCartIcon>
                  ADD TO CART
                </button>
                {addedToCart && <span className='added'>Item added to cart!</span>}
              </div>

              <div className='moreInfo'>
                {producto.fit && (
                  <h3 className='info'>Fit: {producto.fit}</h3>
                )}
                {producto.composition && (
                  <h3 className='info'>
                    Composition: {producto.composition}
                  </h3>
                )}
                {producto.size && (
                  <h3 className='info'>Size: {producto.size}</h3>
                )}
                {producto.weight && (
                  <h3 className='info'>
                    Weight: {producto.weight}
                  </h3>
                )}
              </div>
              <div className='footerInfo'>
                <span>DESCRIPTION</span>
                <span>ADDITIONAL INFORMATION</span>
                <span>FAQ</span>
              </div>
            </ContainerInfo>
          </ContainerProduct>
        )}
      </Container>
    </ProductWrapper>
  );
}

const ProductWrapper = styled.main`
  font-family: 'Open Sans', sans-serif;
  margin-top: 2rem;
  margin-bottom: 5rem;
`;
const ContainerProduct = styled.div`
  display: flex;
  gap: 2rem;
  margin: 0rem 1rem;
  @media (max-width:675px) {
    flex-direction: column;
  }
`;
const ContainerImgs = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  .active{
    outline: 1px solid #151a1e;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    img {
      width: 150px;
      height: 150px;
      object-fit: cover;
    }
  }
  .imgGrande {
    width: 64%;
    object-fit: cover;
  }
  @media (max-width:675px) {
    justify-content: center;
  }
  @media (max-width:400px) {
    flex-direction: column-reverse;
    div{
      flex-direction: row;
      flex-wrap: wrap;
      order: -1;
      img{
        width: 25%;
        height: auto;
      }
    }
    .imgGrande{
      width: 100%;
      display: block;
      margin: 0 auto;
    }
  }
`;
const ContainerInfo = styled.section`
  width: 50%;
  @media (max-width:675px) {
    width: 100%;
  }
  .price {
    display: block;
    margin: 2rem 0rem;
    font-size: 1.7rem;
    color: #151a1e;
  }
  p {
    text-align: justify;
  }
  h2 {
    font-family: 'Lora', serif;
    font-size: 1.8rem;
  }

  .amount {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin: 1.5rem 0rem;
    font-size: 14px;
    button {
      width: 35px;
      height: 35px;
      background-color: #6983977d;
      border: none;
      color: white;
      outline: none;
    }
  }
  .boton{
    position: relative;
  }
  .addToCart {
    cursor: pointer;
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    align-items: center;
    width: 12rem;
    border: none;
    outline: none;
    padding: 0.5rem 0rem;
    font-size: 13px;
    margin-bottom: 1.5rem;
    font-family: 'Open Sans', sans-serif;
    color: white;
    background-color: #151a1e;
    transition: .2s;
    :active{
      transform: scale(1.1);
      transition: .2s;

    }
  }
  .added{
    display: block;
    position: absolute;
    bottom: -30px;
    color: green;
  }

  .moreInfo {
    margin-top: 5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #7d7d7d73;

    .info {
      font-family: 'Open sans', serif;
      font-size: 14px;
      color: #7d7d7d;
      font-weight: 400;
      margin-bottom: 0.5rem;
    }
  }
  .footerInfo {
    width: fit-content;
    span {
      display: block;
      width: 100%;
      padding: 0.6rem 0rem;
      border-bottom: 1px solid #7d7d7d73;
    }
    span:nth-child(3) {
      border-bottom: none;
    }
    margin-top: 2rem;
    font-family: 'Open sans', serif;
    font-size: 14px;
    color: #7d7d7d;
    font-weight: 400;
    margin-bottom: 0.5rem;
  }
`;

export default Product;
