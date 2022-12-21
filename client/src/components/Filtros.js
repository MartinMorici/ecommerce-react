import React, {useState } from 'react';
import styled from 'styled-components';

function Filtros({ products, id }) {
  const [maxPrice, setMaxPrice] = useState(500);
  const [sort, setSort] = useState(null);

  const cat = products.filter(
    (product) =>
      id === product.attributes?.categories?.data[0]?.attributes?.title
  );

  const categories = [];
  for (const prod of cat) {
    const value = prod.attributes.sub_categories.data[0].attributes.title;
    if (!categories.includes(value)) {
      categories.push(value);
    }
  }

  return (
    <FiltrosWrapper>
      <div className='flexItem'>
        <h2>Categories</h2>
        {categories.map((cat) => (
          <div key={cat}>
            <input type='checkbox' id={cat} value={cat} />
            <label htmlFor='1'>{cat}</label>
          </div>
        ))}
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
    </FiltrosWrapper>
  );
}

const FiltrosWrapper = styled.section`
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
  .flexItem {
    text-transform: capitalize;
  }
  @media (max-width: 860px) {
    position: unset;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    .titulos {
      margin-top: 0;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    .titulos {
      margin-top: 0.8rem;
    }
    .flexItem {
      width: 150px;
    }
  }
`;

export default Filtros;