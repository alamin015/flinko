import HomeContent from "../../components/Home/HomeContent";
import HomeImg from "../../components/Home/HomeImg";

const Banner = () => {
  return (
    <div id='home' className='pt-[180px] pb-[75px] sm:pb-14 text-white '>
      <div className='customContainer overflow-hidden relative'>
        <div className='container '>
          <div id='heroBg' className='z-10'></div>
          <div className='grid grid-cols-1 sm:grid-cols-3 items-center relative z-20 gap-14'>
            <HomeContent />
            <HomeImg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
