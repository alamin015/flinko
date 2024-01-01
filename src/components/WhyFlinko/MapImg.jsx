/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
const MapImg = ({ img }) => {
  return (
    <div>
      <motion.img
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0, transition: { type: "spring" } }}
        src={img}
        alt=''
      />
    </div>
  );
};

export default MapImg;
