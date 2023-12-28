import CaroudelItem from "./CaroudelItem";
import { useState } from "react";
import data from "../../assets/data/Testimonial.json";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= data.length) {
      newIndex = data.length - 1;
    }
    setActiveIndex(newIndex);
  };

  return (
    <div className='customCarousel overflow-hidden flex flex-col w-full justify-center'>
      <div
        className='inner'
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {data.map((item, index) => (
          <CaroudelItem key={index} item={item} />
        ))}
      </div>
      <div className='controlBtn text-center flex items-center gap-3 justify-center mt-5'>
        <button
          onClick={() => updateIndex(activeIndex - 1)}
          className='w-[40px] h-[40px] border border-[#37233B] rounded-full flex items-center justify-center'
        >
          <IoIosArrowBack color='#37233B' />
        </button>
        <button
          onClick={() => updateIndex(activeIndex + 1)}
          className='w-[40px] h-[40px] border border-[#37233B] rounded-full flex items-center justify-center'
        >
          <IoIosArrowForward color='#37233B' />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
