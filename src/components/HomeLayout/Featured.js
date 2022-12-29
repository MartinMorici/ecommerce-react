import React from 'react';
import styled from 'styled-components';
import { Container } from '../Navbar';
import Button from '../Button';
import Barras from './Barras';
import { Link } from 'react-router-dom';

function Featured({featured}) {
  return (
    <>
      <Title>
        <Barras />
        <h3>
          This week's <span>newest</span> and <br className='brFeatured' />
          <span>best selling</span> items
        </h3>
        <Barras rotado={'rotado'} />
      </Title>
      <Container>
        <GridFeatured>
          {
          featured.map((product,index) => (
            <div key={product.id} className={`featured`+(index+1)}>
              <img src={product.img} alt='' />
              <Price>
                <span>${product.price}</span>
                <Link to={`./product/${product.id}`}><Button texto={'BUY NOW'} /></Link>
              </Price>
            </div>
          ))
          }
        </GridFeatured>
      </Container>
    </>
  );
}

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem 0rem 7rem 0rem;
  h3 {
    font-family: 'Lora', serif;
    text-align: center;
    font-weight: 500;
    font-size: 60px;
    span {
      font-weight: 800;
      font-style: italic;
    }
  }
  @media (max-width: 600px) {
    margin: 6rem 0rem 3rem 0rem;
    .brFeatured {
      display: none;
    }
    h3 {
      font-size: 30px;
    }
  }
`;

const GridFeatured = styled.section`
  display: grid;
  grid-template-columns: 1fr 400px 400px;
  grid-template-rows: 300px 300px;
  gap: 1.5rem;
  padding: 0 1rem;
  margin-bottom: 8rem;

  @media (max-width: 930px) {
    display: flex;
    flex-direction: column;
  }
  img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }

  .featured1 {
    position: relative;
    grid-column: 1/3;
    grid-row: 1/3;
    img {
      height: 100%;
    }
    span {
      font-size: 30px;
    }
  }
  .featured2 {
    position: relative;
    grid-column: 3/5;
  }
  .featured3 {
    position: relative;
    grid-column: 3/5;
    grid-row: 2/3;
  }

  .featured2,
  .featured3 {
    button {
      height: 40px;
    }
  }
  @media (max-width: 600px) {
    .featured1 {
      span {
        font-size: 20px;
      }
    }
    button {
      height: 20px;
      width: 150px;
      font-size: 16px;
    }
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(139, 139, 139, 0.3);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(139, 139, 139, 0.15);
  padding: 1rem;
  span {
    color: white;
    font-family: 'Lato', sans-serif;
    font-weight: 800;
    font-size: 24px;
  }
  button {
    margin-top: 0;
  }
`;

export default Featured;
