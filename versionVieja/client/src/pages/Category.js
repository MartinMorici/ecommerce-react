import Filtros from '../components/Filtros';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../components/Navbar';
import { useSelector } from 'react-redux';

function Category() {
  const { id } = useParams();
  const {productos,loading} = useSelector((state) => state.productos)
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0);
    setFiltered([])
    const productosFiltrados = productos.filter(
      (product) =>
      id === product.attributes?.categories?.data[0]?.attributes?.title
      );
      setFilteredProducts(productosFiltrados);

  }, [loading, id, productos]);

  return (
    <main>
      <Container>
        <CategoryWrapper>
          <Filtros products={productos} productosFiltrados={filteredProducts} setFiltered={setFiltered} loading={loading} id={id}></Filtros>
          <Productos>
            <img
              className='banner-category'
              src={`../banner-${id}.jpg`}
              alt=''
            />
            <div className='productos'>
              {
              (filtered.length > 0 ? filtered : filteredProducts).map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <div >
                    <img
                      src={
                        process.env.REACT_APP_UPLOAD_URL +
                        product.attributes.img.data.attributes.url
                      }
                      onMouseOver={(e) =>
                        (e.currentTarget.src =
                          process.env.REACT_APP_UPLOAD_URL +
                          product.attributes.img2.data.attributes.url)
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.src =
                          process.env.REACT_APP_UPLOAD_URL +
                          product.attributes.img.data.attributes.url)
                      }
                      alt={product.attributes.title}
                    />
                    <h3>{product.attributes.title}</h3>
                    <span>
                      <span>${product.attributes.price}</span>
                    </span>
                  </div>
                </Link>
              ))
              }
            </div>
          </Productos>
        </CategoryWrapper>
      </Container>
    </main>
  );
}

const CategoryWrapper = styled.div`
  a {
    color: unset;
  }
  padding: 0rem 1rem;
  display: grid;
  grid-template-columns: 20% 1fr;
  margin-top: 3rem;
  margin-bottom: 6rem;
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;
const Productos = styled.section`
  .banner-category {
    height: 250px;
    width: 100%;
    object-fit: cover;
    @media (max-width: 500px) {
      display: none;
    }
  }

  .productos {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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

    @media (max-width: 1000px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 860px) {
      grid-template-columns: repeat(2, 1fr);
      img {
        height: auto;
      }
    }
    @media (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
      .banner-category {
        display: none;
      }
    }
  }
`;

export default Category;
