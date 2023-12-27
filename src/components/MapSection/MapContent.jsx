import Start from "../Start";

const MapContent = () => {
  return (
    <div>
      <h2 className='sm:text-[48px] text-[18px] font-MuseoModerno font-medium text-primary leading-snug'>
        KO: Nurturing Tech-Healthy Kids with Insight and Control
      </h2>
      <p className='sm:text-xl text-base font-MuseoModerno font-medium text-secondary mt-6 mb-10'>
        {`a world where screens are an integral part of growing up, KO stands
        out as the modern parent's partner in nurturing digital well-being. We
        understand the challenges you face in raising tech-savvy children, and
        our app is designed to empower you with actionable insights and
        effective controls.`}
      </p>
      <div className='grid grid-cols-2 gap-6'>
        <div>
          <h2 className='sm:text-[48px] text-3xl text-primary  leading-tight font-semibold'>
            06m
          </h2>
          <p className='text-base text-secondary'>Customer in 190 Countries</p>
        </div>
        <div>
          <h2 className='sm:text-[48px] text-3xl text-primary  leading-tight font-semibold'>
            10k+
          </h2>
          <p className='text-base text-secondary'>Downloads</p>
        </div>
        <div>
          <h2 className='sm:text-[48px] text-3xl text-primary flex items-center gap-1  leading-tight font-semibold'>
            <Start /> <span>4.9</span>
          </h2>
          <p className='text-base text-secondary'>In Apps store</p>
        </div>
        <div>
          <h2 className='sm:text-[48px] text-3xl text-primary flex items-center gap-1  leading-tight font-semibold'>
            <Start /> <span>4.5</span>
          </h2>
          <p className='text-base text-secondary'>In Google Play store</p>
        </div>
      </div>
    </div>
  );
};

export default MapContent;
