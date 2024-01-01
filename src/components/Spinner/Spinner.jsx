import { ClimbingBoxLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className='w-full h-[100vh] bg-[#0F0910] '>
      <div className='customContainer h-full'>
        <div className='container relative h-full w-full'>
          <div id='spinner'></div>
          <div className='w-full h-full flex items-center justify-center'>
            <ClimbingBoxLoader color='#fff' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
