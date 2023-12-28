import banner from "../../assets/images/banner.png";
import { motion } from "framer-motion";
const HomeImg = () => {
  return (
    <div className=''>
      <motion.img
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0, transition: { type: "spring" } }}
        src={banner}
        alt=''
      />
    </div>
  );
};

export default HomeImg;
