/* eslint-disable react/prop-types */
// import React from 'react'

import List from "./List";
import SideBtn from "./SideBtn";

const OpenMenu = ({ open, setOpen }) => {
  return (
    <div
      className={`absolute transition-all duration-500 left-0 top-0 w-full mt-[52px] h-[70vh] ${
        open
          ? "translate-y-0 customBg visible opacity-100"
          : "translate-y-[200px] invisible opacity-0"
      }`}
    >
      <div className='container'>
        <div className='flex items-center justify-center'>
          <div className='w-full text-center'>
            <ul className={`${open ? "visible" : "invisible"} transition-all`}>
              {<List setOpen={setOpen} />}
            </ul>
            <SideBtn open={open} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenMenu;
