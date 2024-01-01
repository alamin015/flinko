// import React from 'react'
import img from "../../assets/images/phone.png";
import MapImg from "../../components/WhyFlinko/MapImg";
import BenefitsContent from "../../components/Benefits/BenefitsContent";

const Benefits = () => {
  return (
    <div id='benefits' className='sm:py-[75px] py-14'>
      <div className='customContainer'>
        <div className='container overflow-hidden'>
          <div className='flex items-stretch flex-col md:flex-row  justify-between lg:gap-20 gap-4'>
            <div className='grow flex-1 order-2 sm:order-1'>
              <BenefitsContent />
            </div>
            <div className='order-1 flex-1 sm:order-2 shrink-0 grow bg-[#F6FDFC] rounded-[40px] p-8 flex items-center justify-center'>
              <MapImg img={img} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
