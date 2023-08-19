import React, { useEffect, useState } from 'react';

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
import { differenceInMilliseconds, addMilliseconds, format } from 'date-fns';


function Home({ toast }) {
  const [Refresh, setRefresh] = useState(0);
  const [Visitors, setVisitors] = useState(userCount);
  const [Users, setUsers] = useState(0);
  useEffect(() => {
    Api.fetchGet('/admin')
    setRefresh('1')
  }, [])
  useEffect(()=>{
    Api.fetchGet('/timers')
    .then(x=>console.log(x))
    .catch(x=>console.log(x))
  },[])

  const [startDate, setStartDate] = useState(new Date('2023-08-18T12:00:00'));
  const [endDate, setEndDate] = useState(new Date());
  const [userCount, setUserCount] = useState(null);

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
      <Info />
      <Howitworks1 />
      <Howitworks2 />
      <Howitworks3 />
      <Wallets />
      {/* <ProductCategories /> */}
      <Accordian />
      {/* <ProductSmokingHero /> */}
      {/* <StickyFooter/> */}
      <div className='flex py-10 items-center w-[100%] justify-center'>
        <div className='w-[50%] flex justify-between items-center'>
          <div className='text-xl font-extrabold'>
            Users:{userCount}
            {/* <button onClick={handleCalculateClick}>click</button> */}
          </div>
          <div className='text-xl font-extrabold'>
            Visitors:{userCount+Visitors}
          </div>
        </div>
      </div>
      <AppFooter />

    </div>
  );
}

export default Home;