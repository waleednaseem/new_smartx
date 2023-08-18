import React, { useEffect } from 'react';

import ProductSmokingHero from './Components/ProductSmokingHero';
import AppFooter from './Components/AppFooter';
import ProductHero from './Components/ProductHero';
import Slider from '../components/Slider';
import Header12 from './Header12';
import Announcement from '../components/Announcement';
import Accordian from './Components/Accordian';
import { fetchGet } from '../../redux/actions/auth'
import Api from '../../src/API/API'
import Howitworks from '../components/homepage/Howitworks1';
import Howitworks3 from '../components/homepage/Howitworks3';
import Howitworks2 from '../components/homepage/Howitworks2';
import Howitworks1 from '../components/homepage/Howitworks1';
import Info from '../components/homepage/Info';
import Wallets from '../components/homepage/Wallets';


function Home({toast}) {
  useEffect(() => {
    Api.fetchGet('/admin')
  }, [])
  return (
    <div
      style={{
        // backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        // backgroundSize: "cover",
      }}
      className='bg-brickwall overflow-hidden'
    >
      <Header12 toast={toast} />
      
      <Slider />
      <Announcement />
      {/* <ProductHero /> */}
      <Info/>
      <Howitworks1/>
      <Howitworks2/>
      <Howitworks3/>
      <Wallets/>
      {/* <ProductCategories /> */}
      <Accordian />
      {/* <ProductSmokingHero /> */}
      {/* <StickyFooter/> */}
      <AppFooter />

    </div>
  );
}

export default Home;