/* eslint-disable react/no-unescaped-entities */
const Join = () => {
  return (
    <div className='sm:py-[75px] py-14'>
      <div className='customContainer'>
        <div className='container'>
          <div
            id='join'
            className='relative h-[500px] border border-[#B0AEC4] rounded-[60px] flex items-center justify-center'
          >
            <div className='absolute custom-radial'></div>
            <div className='text-center md:w-[574px] w-full mx-auto px-2 sm:px-0'>
              <h2 className='sm:text-4xl text-2xl font-semibold text-primary'>
                Take charge of your child's digital well-being. Join KO's beta
                queue now!
              </h2>
              <p className='sm:text-[18px] text-base font-medium text-secondary mt-5 mb-8'>
                Ready to take control of your child's digital well-being? Join
                the KO community by signing up for our beta queue now.
              </p>
              <button className='btn gradientBtn text-white font-Poppins'>
                Get started & Join us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
