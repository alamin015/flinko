import appStore from "../../assets/images/appStore.svg";
import googlePlay from "../../assets/images/googlePlay.svg";

/* eslint-disable react/no-unescaped-entities */
const HomeContent = () => {
  return (
    <div className='xl:col-start-1 xl:col-span-3 lg:col-end-4 lg:col-start-1'>
      <h2 className='lg:text-5xl text-3xl font-semibold'>
        Empowering Parents for their Children’s Digital Well-Being
      </h2>
      <p className='lg:text-xl text-base font-medium mt-8 text-[#D7D7D7] mb-10'>
        Flinko - Your Digital Parenting Assistant. Our app empowers you to guide
        your child's digital journey while fostering their well-being
      </p>
      <div className='sm:flex items-center gap-8'>
        <button className='btn w-full sm:w-auto border border-white rounded-full flex items-center justify-center transition-all mb-5 sm:mb-0 bg-white hover:bg-transparent hover:text-white text-primary'>
          <span className='pr-2'>
            <img src={appStore} alt='' />
          </span>
          Dashboard
        </button>
        <button className='btn w-full sm:w-auto border border-white rounded-full flex items-center justify-center transition-all hover:bg-white hover:text-primary'>
          <span className='pr-2'>
            <img src={googlePlay} alt='' />
          </span>
          Play Store
        </button>
      </div>
    </div>
  );
};

export default HomeContent;
