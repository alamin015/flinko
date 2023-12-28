import { useState } from "react";
import logo from "../../assets/logo/Logo.png";
import List from "./List";
import SideBtn from "./SideBtn";
import { useEffect } from "react";
import { HiBars2 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import OpenMenu from "./OpenMenu";
const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  });

  return (
    <div
      className={`fixed top-0 z-[99999999] left-0 w-full py-5  ${
        sticky ? "headerActive" : ""
      }`}
    >
      <div className='customContainer relative'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <img src={logo} className='w-[140px] lg:w-auto' alt='' />
            <div className='hidden lg:block'>
              <ul className='flex items-center gap-8 '>
                <List />
              </ul>
            </div>
            <div className='hidden lg:block'>
              <SideBtn />
            </div>

            {/* for mobile menu  */}
            <div
              className='block lg:hidden cursor-pointer'
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? (
                <LiaTimesSolid color='#fff' size={32} />
              ) : (
                <HiBars2 color='#fff' size={32} />
              )}
            </div>

            {/* when menu open it works  */}
            <OpenMenu open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
