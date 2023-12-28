/* eslint-disable react/prop-types */
const SideBtn = ({ open }) => {
  return (
    <div
      className={`lg:flex transition-all items-center gap-5 ${
        open
          ? "opacity-100 visible"
          : "invisible lg:visible opacity-0 lg:opacity-100"
      }`}
    >
      <button className='btn w-full mb-5 lg:mb-0 md:w-auto text-white border border-white rounded-full   font-Poppins transition-all hover:bg-white hover:text-primary'>
        Log In
      </button>
      <button className='btn w-full text-white md:w-auto border border-white rounded-full  font-Poppins transition-all hover:bg-white hover:text-primary'>
        Sign Up
      </button>
    </div>
  );
};

export default SideBtn;
