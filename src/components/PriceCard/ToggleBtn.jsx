import { useState } from "react";

const ToggleBtn = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='my-14 max-w-[400px] w-full mx-auto'>
      <div className='flex cursor-pointer items-center justify-between border border-[#182E76] rounded-full'>
        <span
          onClick={() => setToggle(true)}
          className={`py-3 rounded-full transition-all font-Poppins font-medium text-sm ${
            toggle ? "toggleBtn text-white" : "text-primary"
          }  inline-block shrink-0 grow`}
        >
          Monthly billing
        </span>
        <span
          onClick={() => setToggle(false)}
          className={`py-3 rounded-full transition-all font-Poppins font-medium text-sm ${
            !toggle ? "toggleBtn text-white" : "text-primary"
          }  inline-block shrink-0 grow`}
        >
          Annual billing
        </span>
      </div>
    </div>
  );
};

export default ToggleBtn;
