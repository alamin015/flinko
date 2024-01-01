/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";

import Star from "./Star";

const CaroudelItem = ({ item }) => {
  return (
    <div className='carouselItem'>
      <div className='border rounded-[20px] sm:py-[80px] sm:px-[40px] p-4 flex items-center justify-center'>
        <div className='text-center'>
          <h3 className='md:text-[28px] text-[18px] text-secondary'>
            {item?.comment}
          </h3>
          <div className='text-center max-w-[300px] w-full mx-auto flex items-center justify-center gap-4 mt-14'>
            <img src={item.image} width={64} height={64} alt='' />
            <div>
              <Star star={item.star} />
              <p className='text-xl font-Poppins text-primary'>{item?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CaroudelItem);
