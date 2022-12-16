import React from 'react';
import Benefits from '../components/HomeLayout/Benefits';
import Shop from '../components/HomeLayout/Shop';
import Featured from '../components/HomeLayout/Featured';
import Hero from '../components/HomeLayout/Hero';
import Partners from '../components/HomeLayout/Partners';

function Home() {
  return (
    <main>
      <Hero/>
      <Partners/>
      <Benefits />
      <Shop />
      <Featured />
    </main>
  );
}


export default Home;
