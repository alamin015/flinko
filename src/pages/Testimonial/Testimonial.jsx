import Carousel from "../../components/Carousel/Carousel";

const Testimonial = () => {
  return (
    <div className='py-14 sm:py-[75px]'>
      <div className='custoomContainer'>
        <div className='container'>
          <div className='realtive'>
            <div className='mb-[60px]'>
              <h2 className='sm:text-5xl text-[32px] text-center font-semibold text-primary'>
                Testimonial
              </h2>
            </div>
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
