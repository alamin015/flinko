import PriceCard from "../../components/PriceCard/PriceCard";
import Card from "../../assets/data/Card.json";
import ToggleBtn from "../../components/PriceCard/ToggleBtn";

const Price = () => {
  return (
    <div id='pricing' className='py-14 sm:py-[75px]'>
      <div className='customContainer'>
        <div className='container'>
          <div className='text-center max-w-[768px] mx-auto'>
            <h2 className='text-3xl font-bold text-primary'>Pricing Plan</h2>
            <p className='text-base font-base text-secondary mt-6'>
              Choose from our flexible pricing options below
            </p>
            <ToggleBtn />
          </div>
          <div className='grid grid-cols-1 items-stretch sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {Card.map((item, index) => (
              <PriceCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
