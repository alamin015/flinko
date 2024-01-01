import MapImg from "../../components/WhyFlinko/MapImg";
import img from "../../assets/images/map.png";
import WhyFlinkoContent from "../../components/WhyFlinko/WhyFlinkoContent";

const WhyFlinko = () => {
  return (
    <div id='ko' className='sm:py-[75px] py-14'>
      <div className='customContainer'>
        <div className='container overflow-hidden'>
          <div className='flex items-stretch flex-col md:flex-row lg:gap-20 gap-5'>
            <div className='shrink-0 flex-1 grow bg-[#faf9fa] rounded-[40px] p-8 flex items-center justify-center'>
              <MapImg img={img} />
            </div>
            <div className='grow flex-1'>
              <WhyFlinkoContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyFlinko;
