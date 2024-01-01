// import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  const scrollFunc = () => {
    if (scrollY > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);

    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  //   scroll to top
  const scrollTop = () => {
    scrollTo(0, 0);
  };

  return (
    <div
      id='scrollTop'
      onClick={scrollTop}
      className={`fixed flex cursor-pointer z-[999] text-white items-center transition-all ${
        show ? "visible translate-y-0" : "invisible translate-y-[300px]"
      } justify-center right-4 bottom-5 w-[48px] h-[64px] border border-white rounded-full`}
    >
      <FaLongArrowAltUp size={24} />
    </div>
  );
};

export default ScrollToTop;
