import MapContent from "../../components/MapSection/MapContent";
import MapImg from "../../components/MapSection/MapImg";
import img from "../../assets/images/map.png";

const Map = () => {
  return (
    <div id='ko' className='sm:py-[75px] py-14'>
      <div className='customContainer'>
        <div className='container overflow-hidden'>
          <div className='flex items-stretch flex-col sm:flex-row sm:gap-20 gap-5'>
            <div className='shrink-0 grow bg-[#faf9fa] rounded-[40px] p-8 flex items-center justify-center'>
              <MapImg img={img} />
            </div>
            <div className='grow'>
              <MapContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
