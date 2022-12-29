import React from 'react';
import { useSelector} from 'react-redux'
import Benefits from '../components/HomeLayout/Benefits';
import Shop from '../components/HomeLayout/Shop';
import Featured from '../components/HomeLayout/Featured';
import Hero from '../components/HomeLayout/Hero';
import Partners from '../components/HomeLayout/Partners';

function Home() {
  const {featured} = useSelector((state) => state.productos)
  console.log(featured);
  return (
    <main>
      <Hero />
      <Partners />
      <Benefits />
      <Shop />
      {<Featured featured={featured} /> }
    </main>
  );
}

export default Home;
