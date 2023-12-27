// import React from 'react'
import img from "../../assets/images/section-2.png";
const FaqTop = () => {
  return (
    <div>
      <div className='flex md:flex-row flex-col justify-between gap-14 sm:p-8 p-2'>
        <div>
          <h2 className='font-MuseoModerno  sm:text-5xl text-2xl font-medium text-primary'>{`Parents prioritizing a secure, balanced digital environment for their children's growth`}</h2>
          <p className='mt-5 mb-8 sm:text-xl text-base font-MuseoModerno font-semibold text-secondary'>
            Click on the features below to see what you can do with Flinko
          </p>
          <button className='btn border rounded-full border-[#182E76] text-[#182E76] hover:bg-[#182E76] hover:text-white transition-all'>
            Try a free trial
          </button>
        </div>
        <div className='shrink-0'>
          <img src={img} className='sm:w-auto w-full mx-auto' alt='' />
        </div>
      </div>
    </div>
  );
};

export default FaqTop;
