import HomeContent from "../../components/Home/HomeContent";
import HomeImg from "../../components/Home/HomeImg";

const Banner = () => {
  return (
    <div id='home' className=' pb-[75px] sm:pb-14 text-white '>
      <div className='customContainer overflow-hidden relative'>
        <div className='container pt-[180px] overflow-hidden'>
          <div id='heroBg' className='z-10'></div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-3 items-center relative z-20 gap-14'>
            <HomeContent />
            <HomeImg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
