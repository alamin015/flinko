import banner from "../../assets/images/banner.png";
import { motion } from "framer-motion";
const HomeImg = () => {
  return (
    <div className='shrink-0 grow lg:col-start-4 lg:col-end-6'>
      <motion.img
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0, transition: { type: "spring" } }}
        className='md:w-full w-full sm:w-[80%] mx-auto'
        src={banner}
        alt=''
      />
    </div>
  );
};

export default HomeImg;
