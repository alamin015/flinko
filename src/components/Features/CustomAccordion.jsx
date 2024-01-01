/* eslint-disable react/prop-types */
import { Accordion } from "keep-react";
import { IoIosArrowDown } from "react-icons/io";
import Data from "../../assets/data/Faq.json";
// import { CiClock1 } from "react-icons/ci";

const CustomAccordion = () => {
  // console.log(Data);
  return (
    <Accordion flush={false}>
      {Data.map((item, index) => (
        <Accordion.Panel
          key={index}
          className='bg-transparent mb-5 border border-[#B0AEC4] rounded-[20px]'
        >
          <Accordion.Container id='bg' className='rounded-t-[20px]'>
            <Accordion.Title>
              <div className='flex items-center gap-3'>
                <span className='border border-[#B0AEC4] h-9 w-9 rounded-lg flex items-center justify-center'>
                  <img src={item.icon} alt='' />
                </span>
                <h2 className='font-medium  sm:text-2xl text-[18px] text-primary'>
                  {item.title}
                </h2>
              </div>
            </Accordion.Title>
            <Accordion.Icon>
              <IoIosArrowDown size={24} />
            </Accordion.Icon>
          </Accordion.Container>
          <Accordion.Content className='text-base font-medium sm:text-[18px] text-secondary'>
            {item.content}
          </Accordion.Content>
        </Accordion.Panel>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
