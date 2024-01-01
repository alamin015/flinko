/* eslint-disable react/no-unescaped-entities */
const Community = () => {
  return (
    <div className='sm:py-[75px] py-14'>
      <div className='customContainer'>
        <div className='container'>
          <div
            id='join'
            className='relative sm:h-[500px] h-auto p-4  border border-[#B0AEC4] sm:rounded-[60px] rounded-[20px] flex items-center justify-center'
          >
            <div className='absolute custom-radial'></div>
            <div className='text-center relative z-[50] md:w-[574px] w-full mx-auto px-2 sm:px-0'>
              <h2 className='sm:text-4xl text-[22px] font-semibold text-primary'>
                Take charge of your child's digital well-being. Join{" "}
                <span className='font-bold'>Flinko's</span> beta queue now!
              </h2>
              <p className='sm:text-[18px] text-base font-medium text-secondary mt-5 mb-8'>
                Ready to take control of your child's digital well-being? Join
                the Flinko community by signing up for our beta queue now.
              </p>
              <button className='btn cursor-pointer gradientBtn text-white font-Poppins'>
                Get started & Join us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
