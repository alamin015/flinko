// import React from 'react'
import img from "../../assets/images/phone.png";
import MapImg from "../../components/MapSection/MapImg";
import PhoneContent from "../../components/Phone/PhoneContent";

const Phone = () => {
  return (
    <div id='benefits' className='sm:py-[75px] py-14'>
      <div className='customContainer'>
        <div className='container'>
          <div className='flex items-stretch flex-col sm:flex-row  justify-between sm:gap-20 gap-4'>
            <div className='grow order-2 sm:order-1'>
              <PhoneContent />
            </div>
            <div className='order-1 sm:order-2 shrink-0 grow bg-[#F6FDFC] rounded-[40px] p-8 flex items-center justify-center'>
              <MapImg img={img} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
