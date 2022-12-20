import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../components/Navbar';
import { useGlobalContext } from '../context/Context';

function Category() {
  const { id } = useParams();
  const { products } = useGlobalContext();
  const [maxPrice, setMaxPrice] = useState(500);
  const [sort, setSort] = useState(null);
  const productosFiltrados = products.filter(
    (product) =>
      id === product.attributes?.categories?.data[0]?.attributes?.title
  );
  console.log(productosFiltrados);

  return (
    <main>
      <Container>
        <CategoryWrapper>
          <Filtros>
            <div className='flexItem'>
              <h2>Categories</h2>
              <div>
                <input type='checkbox' id='1' value={1} />
                <label htmlFor='1'>Shoes</label>
              </div>
              <div>
                <input type='checkbox' id='2' value={2} />
                <label htmlFor='2'>Sueter</label>
              </div>
              <div>
                <input type='checkbox' id='3' value={3} />
                <label htmlFor='3'>T-Shirt</label>
              </div>
            </div>
            <div className='flexItem'>
              <h2 className='titulos'>Filter by Price</h2>
              <div className='filterPrice'>
                <span>0</span>
                <input
                  type='range'
                  min={0}
                  max={500}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
                <span>{maxPrice}</span>
              </div>
            </div>

            <div className='flexItem'>
              <h2 className='titulos'>Sort by price</h2>
              <div>
                <input
                  type='radio'
                  id='asc'
                  value='asc'
                  name='price'
                  onChange={(e) => setSort(e.target.value)}
                />
                <label htmlFor='asc'>Lowest first</label>
              </div>
              <div>
                <input
                  type='radio'
                  id='desc'
                  value='desc'
                  name='price'
                  onChange={(e) => setSort(e.target.value)}
                />
                <label htmlFor='desc'>Highest first</label>
              </div>
            </div>
          </Filtros>
          <Productos>
            <img
              className='banner-category'
              src='../banner-category.png'
              alt=''
            />
            <div className='productos'>
              {productosFiltrados.map((product) => (
                <div key={product.id}>
                  <img
                    src={
                      process.env.REACT_APP_UPLOAD_URL +
                      product.attributes.img.data.attributes.url
                    }
                    alt={product.attributes.title}
                  />
                  <h3>{product.attributes.title}</h3>
                  <span>
                    <span>${product.attributes.price}</span>
                  </span>
                </div>
              ))}
            </div>

          </Productos>
        </CategoryWrapper>
      </Container>
    </main>
  );
}

const Filtros = styled.section`
  font-family: 'Open Sans', sans-serif;
  height: fit-content;
  position: sticky;
  top: 60px;
  accent-color: #698397;
  h2 {
    font-size: 20px;
  }
  label {
    font-size: 16px;
  }
  .filterPrice {
    display: flex;
    align-items: center;

    margin-top: 1rem;
    input {
      margin-top: 0;
    }
  }
  input {
    margin-top: 1rem;
  }
  .titulos {
    margin-top: 2rem;
  }
  label {
    margin-left: 0.6rem;
  }
  @media (max-width:860px) {
      position: unset;
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      .titulos{
        margin-top: 0;
      }
    }
  @media (max-width:500px) {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      .titulos{
        margin-top: 0.8rem;
      }
      .flexItem{
        width: 150px;
      }
    }
`;

const CategoryWrapper = styled.div`
  padding: 0rem 1rem;
  display: grid;
  grid-template-columns: 20% 1fr;
  margin-top: 3rem;
  margin-bottom: 6rem;
  @media (max-width:860px) {
      grid-template-columns: 1fr;
    }
`;
const Productos = styled.section`
  .banner-category {
    height: 250px;
    width: 100%;
    object-fit: cover;
    @media (max-width:500px) {
        display: none;
    }
  }

  .productos {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    justify-content: space-between;
    grid-gap: 2rem;
    h3,
    span {
      font-family: 'Open Sans', sans-serif;
    }
    h3 {
      margin: 5px 0px;
      font-size: 17px;
      font-weight: 400;
    }
    span {
      font-weight: 600;
    }

    img {
      width: 100%;
      height: 375px;
      object-fit: cover;
    }

    .discount {
      margin-right: 10px;
      text-decoration: line-through;
      color: grey;
    }

    @media (max-width:1000px) {
      grid-template-columns: repeat(3,1fr);
    }
    @media (max-width:860px) {
      grid-template-columns: repeat(2,1fr);
      img{
        height: auto;
      }
    }
    @media (max-width:500px) {
      grid-template-columns: repeat(1,1fr);
      .banner-category{
        display: none;
      }
  
    }
  }
`;

export default Category;
