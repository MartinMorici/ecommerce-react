import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../components/Navbar';

function Category() {

  const [maxPrice, setMaxPrice] = useState(500)
  const [sort, setSort] = useState(null)
  return (
    <main>
      <Container>
        <CategoryWrapper>
          <Filtros>
            <div>
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
            <div>
              <h2 className='titulos'>Filter by Price</h2>
              <div className='filterPrice'>
                <span>0</span>
                <input type='range' min={0} max={500} onChange={e => setMaxPrice(e.target.value)} />
                <span>{maxPrice}</span>
              </div>
            </div>


            <div>
              <h2 className='titulos'>Sort by price</h2>
              <div>
                <input type='radio' id='asc' value='asc' name='price' onChange={e => setSort(e.target.value)} />
                <label htmlFor='asc'>Lowest first</label>
              </div>
              <div>
                <input type='radio' id='desc' value='desc' name='price' onChange={e => setSort(e.target.value)} />
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
              <div>
                <img src='../product1.jpg' alt='' />
                <h3>Hoodie</h3>
                <span>
                  <span className='discount'>$19</span> $12
                </span>
              </div>
              <div>
                <img src='../product2.jpg' alt='' />
                <h3>Skirt</h3>
                <span>
                  <span className='discount'>$19</span> $12
                </span>
              </div>
              <div>
                <img src='../product1.jpg' alt='' />
                <h3>Hoodie</h3>
                <span>
                  <span className='discount'>$19</span> $12
                </span>
              </div>
              <div>
                <img src='../product2.jpg' alt='' />
                <h3>Skirt</h3>
                <span>
                  <span className='discount'>$19</span> $12
                </span>
              </div>
              <div>
                <img src='../product2.jpg' alt='' />
                <h3>Skirt</h3>
                <span>
                  <span className='discount'>$19</span> $12
                </span>
              </div>
              <div>
                <img src='../product2.jpg' alt='' />
                <h3>Skirt</h3>
                <span>
                  <span className='discount'>$19</span> $12
                </span>
              </div>
              <div>
                <img src='../product2.jpg' alt='' />
                <h3>Skirt</h3>
                <span>
                  <span className='discount'>$19</span> $12
                </span>
              </div>
            </div>
          </Productos>
        </CategoryWrapper>
      </Container>
    </main>
  );
}

const Filtros = styled.section`
  font-family: 'Open Sans', sans-serif;
  height: 100%;
  position: sticky;
  top: 0;
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
`;

const CategoryWrapper = styled.div`
  padding: 0rem 1rem;
  display: grid;
  grid-template-columns: 20% 1fr;
  margin-top: 3rem;
  margin-bottom: 6rem;
`;
const Productos = styled.section`
  .banner-category {
    height: 250px;
    width: 100%;
    object-fit: cover;
  }

  .productos {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: auto auto auto auto;
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
      width: 250px;
      height: 330px;
      object-fit: cover;
    }

    .discount {
      margin-right: 10px;
      text-decoration: line-through;
      color: grey;
    }
  }
`;

export default Category;
