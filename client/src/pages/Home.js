
import React from 'react';
import Benefits from '../components/HomeLayout/Benefits';
import Shop from '../components/HomeLayout/Shop';
import Featured from '../components/HomeLayout/Featured';
import Hero from '../components/HomeLayout/Hero';
import Partners from '../components/HomeLayout/Partners';
import { useGlobalContext } from '../context/Context';

function Home() {
  const {isLoading, featured} = useGlobalContext()
  return (
    <main>
      <Hero />
      <Partners />
      <Benefits />
      <Shop />
      { (isLoading === false) && <Featured featured={featured} /> }
    </main>
  );
}

export default Home;
