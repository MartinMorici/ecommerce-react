import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

function Filtros({ products, id, productosFiltrados, setFiltered }) {
  const [maxPrice, setMaxPrice] = useState(300);
  const [sort, setSort] = useState(null);
  const [selectedCat, setSelectedCat] = useState([]);
  const [cat, setCat] = useState([]);
  const location = useLocation();

  const handleChange = (e) => {
    const category = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedCat([...selectedCat, category]);
    } else {
      setSelectedCat(selectedCat.filter((item) => item !== category));
    }
  };

  useEffect(() => {
    const cat = products.filter((product) => id === product.categories);

    const categories = [];
    for (const prod of cat) {
      const value = prod.sub_categories;
      if (!categories.includes(value)) {
        categories.push(value);
      }
    }
    
    
    let prods = [];
    prods = productosFiltrados.filter((item) =>
      selectedCat.includes(item.sub_categories)
    );

    if (selectedCat.length < 1) {
      prods = productosFiltrados;
    }

    prods = prods.filter((prod) => prod.price < maxPrice);

    if (sort) {
      sort === 'asc'
        ? (prods = prods.sort(function (a, b) {
            return a.price - b.price;
          }))
        : (prods = prods.sort(function (a, b) {
            return b.price - a.price;
          }));
    }

    setCat(categories);
    setFiltered(prods);
  }, [selectedCat, maxPrice, sort, location]);

  return (
    <FiltrosWrapper>
      <div className='flexItem'>
        <h2>Categories</h2>
        {cat.map((cat) => (
          <div key={cat}>
            <input
              type='checkbox'
              id={cat}
              value={cat}
              onChange={handleChange}
            />
            <label htmlFor={cat}>{cat}</label>
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
            max={300}
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
