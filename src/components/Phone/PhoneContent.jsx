const PhoneContent = () => {
  return (
    <div>
      <h2 className='sm:text-[48px] text-3xl font-medium text-primary mb-6 leading-tight'>
        We’re here to help with your concerns
      </h2>
      {/* group-1  */}

      <div className='border bg-[#fafafa] border-[#B0AEC4] rounded-[20px] py-4'>
        <div className='px-4'>
          <div className='flex items-center gap-2 mb-4'>
            <img
              src='https://i.ibb.co/gStt4qs/cup.png'
              width={46}
              height={46}
              alt=''
            />
            <h3 className='sm:text-2xl text-xl font-medium text-primary'>
              Peace of Mind
            </h3>
          </div>
          <p className='sm:text-[18px] text-base text-secondary font-medium'>{`Take charge of your child's digital journey, with features that promote responsible screen time and productive activities.`}</p>
        </div>
        <hr className='bg-[#B0AEC4] my-4' />

        {/* group 2  */}

        <div className='px-4'>
          <div className='flex items-center gap-2 mb-4'>
            <img
              src='https://i.ibb.co/SxMzysM/hand.png'
              width={46}
              height={46}
              alt=''
            />
            <h3 className='sm:text-2xl text-xl font-medium text-primary'>
              Peace of Mind
            </h3>
          </div>
          <p className='sm:text-[18px] text-base text-secondary font-medium'>{`Take charge of your child's digital journey, with features that promote responsible screen time and productive activities.`}</p>
        </div>
        <hr className='bg-[#B0AEC4] my-4' />
        {/* group 3  */}
        <div className='px-4'>
          <div className='flex items-center gap-2 mb-4'>
            <img
              src='https://i.ibb.co/w4D8hS1/head-Phone.png'
              width={46}
              height={46}
              alt=''
            />
            <h3 className='sm:text-2xl text-xl font-medium text-primary'>
              Peace of Mind
            </h3>
          </div>
          <p className='sm:text-[18px] text-base text-secondary font-medium'>{`Take charge of your child's digital journey, with features that promote responsible screen time and productive activities.`}</p>
        </div>
      </div>
    </div>
  );
};

export default PhoneContent;
