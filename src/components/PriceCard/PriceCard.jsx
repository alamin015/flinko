/* eslint-disable react/prop-types */
import { CiCircleCheck } from "react-icons/ci";
import { DiAndroid } from "react-icons/di";

const PriceCard = ({ data }) => {
  return (
    <div
      id='card'
      className={`flex hover:shadow-lg flex-col justify-between group p-8 cursor-pointer rounded-[20px] border border-[#B0AEC4] ${
        data.active ? "active" : ""
      }`}
    >
      <div>
        <div className='flex items-center justify-end'>
          <DiAndroid
            className={`w-[26px] h-[32px] text-[#182E76]  duration-500 transition-all ${
              data.active ? "text-white" : "text-[#182E76]"
            }`}
          />
        </div>
        <h4
          className={`text-xl  duration-500 transition-all  font-semibold ${
            data.active ? "text-white" : "text-primary"
          }`}
        >
          {data?.title}
        </h4>
        <div className='flex items-center my-3'>
          <span
            className={`sm:text-heading-4 duration-500 transition-all  text-4xl font-bold ${
              data.active ? "text-white" : "text-primary"
            }`}
          >
            {data.priceYearly ? `$${data.priceYearly}` : "Free"}
          </span>
          <span
            className={`ml-1 duration-500 transition-all  sm:text-body-2 text-base font-medium ${
              data.active ? "text-white" : "text-primary"
            }`}
          >
            {data.priceYearly ? "/ yearly" : ""}
          </span>
        </div>
        <div>
          <h4
            className={`text-base duration-500 transition-all   font-medium ${
              data.active ? "text-white" : "text-primary"
            }`}
          >
            {data.priceMonthly ? `or $${data.priceMonthly} mo` : ""}
          </h4>
        </div>
        <hr className='bg-[#B0AEC4] h-[1px] my-8' />
        <div>
          <h3
            className={`text-[18px] duration-500 transition-all font-medium  mb-4 ${
              data.active ? "text-white" : "text-primary"
            }`}
          >
            Includes:
          </h3>

          {data?.includes.map((el, index) => (
            <p
              key={index}
              className={`flex items-center gap-2 text-base font-medium  duration-500 mb-4 transition-all ${
                data.active ? "text-white" : "text-secondary"
              }`}
            >
              <CiCircleCheck size={24} /> <span>{el}</span>
            </p>
          ))}
        </div>
      </div>

      <button
        className={`btn w-full   ${
          data.active
            ? "bg-white text-[#37233b] border border-[#37233b]"
            : "cardBtn"
        }`}
      >
        Get Started
      </button>
    </div>
  );
};

export default PriceCard;
