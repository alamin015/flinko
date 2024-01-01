// import React from 'react'
import img from "../../assets/images/section-2.png";
import { motion } from "framer-motion";
const FeaturesTop = () => {
  return (
    <div>
      <div className='flex md:flex-row flex-col justify-between gap-14 sm:p-8 p-2'>
        <div className='flex-1'>
          <h2 className='  sm:text-4xl text-2xl font-semibold text-primary'>{`Parents prioritizing a secure, balanced digital environment for their children's growth`}</h2>
          <p className='mt-5 mb-8 sm:text-xl text-base font-medium text-secondary'>
            Click on the features below to see what you can do with Flinko
          </p>
          <button className='btn gradientHover border rounded-full border-[#182E76] text-[#182E76]  hover:text-white transition-all'>
            Try a free trial
          </button>
        </div>
        <div className='shrink-0 flex-1 self-center'>
          <motion.img
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0, transition: { type: "spring" } }}
            src={img}
            className='sm:w-auto w-full mx-auto'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesTop;
