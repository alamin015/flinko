// import React from 'react'
import facebook from "../../assets/social/facebook.png";
import linkedin from "../../assets/social/linkedin.png";
import yotube from "../../assets/social/yotube.png";
import insta from "../../assets/social/insta.png";
import logo from "../../assets/logo/Logo.png";
import { menu } from "../Header/Link";
const Footer = () => {
  return (
    <div className='py-14 bg-[#0F0910] overflow-hidden'>
      <div className='customContainer'>
        <div className='container relative' id='footer'>
          <div id='footerGradient' className='z-10'></div>
          <div className='z-20 relative'>
            <img src={logo} className='mb-10' alt='' />
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 text-white gap-3'>
              <div className='text-white list-none'>
                {menu.map((item, index) => (
                  <li key={index} className='mb-5'>
                    <a href={item.path}>{item.label}</a>
                  </li>
                ))}
              </div>
              <div className='list-none'>
                <li className='mb-5'>
                  <a href='#'>Blog</a>
                </li>
                <li className='mb-5'>
                  <a href='#'>Privacy policy</a>
                </li>
                <li className='mb-5'>
                  <a href='#'>Terms of Condition</a>
                </li>
              </div>
              <div className='list-none'>
                <li className='mb-5'>(303) 555-0105</li>
                <li className='mb-5'>example@gmail.com</li>
                <li className='mb-5 flex gap-3'>
                  <a href='#'>
                    <img src={facebook} alt='' />
                  </a>
                  <a href='#'>
                    <img src={yotube} alt='' />
                  </a>
                  <a href='#'>
                    <img src={linkedin} alt='' />
                  </a>
                  <a href='#'>
                    <img src={insta} alt='' />
                  </a>
                </li>
              </div>
              <div></div>
            </div>
            <p className='mt-14 text-white'>
              &copy; {new Date().getFullYear()} Logoipsim, All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
