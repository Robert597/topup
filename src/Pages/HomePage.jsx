import React from 'react';
import Banner from '../Components/Homepage/banner';
import Welcomebanner from '../Components/Homepage/Welcomebanner';
import New from '../Components/Homepage/New';
import Unlimited from '../Components/Homepage/Unlimited';

import Extending from '../Components/Homepage/Extending';

const HomePage = () => {
  return (
    <div className='Homepage'>
        <Banner/>
      <Welcomebanner/>
      <New/>
      <Unlimited/>
      <Extending/>
    </div>
  )
}

export default HomePage;