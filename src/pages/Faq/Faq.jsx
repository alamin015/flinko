// import React from 'react'
import FaqBottom from "../../components/Section-2/FaqBottom";
import FaqTop from "../../components/Section-2/FaqTop";

const Faq = () => {
  return (
    <div>
      <div className='container'>
        <div className=' customContainer bg-[#FAF9FA] rounded-[20px] sm:rounded-[40px]'>
          <FaqTop />
          <FaqBottom />
        </div>
      </div>
    </div>
  );
};

export default Faq;
