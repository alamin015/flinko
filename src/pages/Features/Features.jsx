// import React from 'react'
import FeaturesBottom from "../../components/Features/FeaturesBottom";
import FeaturesTop from "../../components/Features/FeaturesTop";

const Features = () => {
  return (
    <div id='features' className='sm:py-[75px] py-14'>
      <div className='container overflow-hidden'>
        <div className=' customContainer bg-[#FAF9FA] rounded-[20px] sm:rounded-[40px]'>
          <FeaturesTop />
          <FeaturesBottom />
        </div>
      </div>
    </div>
  );
};

export default Features;
