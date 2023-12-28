/* eslint-disable react/prop-types */
import { CiCircleCheck } from "react-icons/ci";
import { DiAndroid } from "react-icons/di";

const PriceCard = ({ data }) => {
  return (
    <div
      id='card'
      className='flex flex-col justify-between group p-8 cursor-pointer rounded-[20px] border border-[#B0AEC4]'
    >
      <div>
        <div className='flex items-center justify-end'>
          <DiAndroid className='w-[26px] h-[32px] text-[#182E76] group-hover:text-[#fff] duration-500 transition-all' />
        </div>
        <h4 className='text-xl text-primary duration-500 transition-all group-hover:text-white font-semibold'>
          {data?.title}
        </h4>
        <div className='flex items-center my-3'>
          <span className='sm:text-heading-4 duration-500 transition-all group-hover:text-white text-2xl font-bold text-primary'>
            {data.priceYearly ? `$${data.priceYearly}` : "Free"}
          </span>
          <span className='ml-1 duration-500 transition-all group-hover:text-white sm:text-body-2 text-base font-medium text-primary'>
            {data.priceYearly ? "/ yearly" : ""}
          </span>
        </div>
        <div>
          <h4 className='text-base duration-500 transition-all group-hover:text-white text-primary font-medium'>
            {data.priceMonthly ? `or $${data.priceMonthly} mo` : ""}
          </h4>
        </div>
        <hr className='bg-[#B0AEC4] h-[1px] my-8' />
        <div>
          <h3 className='text-[18px] duration-500 transition-all font-medium group-hover:text-white text-primary mb-4'>
            Includes:{" "}
          </h3>

          {data?.includes.map((el, index) => (
            <p
              key={index}
              className='flex items-center gap-2 text-base font-medium text-secondary duration-500 mb-4 transition-all group-hover:text-white'
            >
              <CiCircleCheck size={24} /> <span>{el}</span>
            </p>
          ))}
        </div>
      </div>
      <button className='btn w-full  cardBtn'>Get Started</button>
    </div>
  );
};

export default PriceCard;
