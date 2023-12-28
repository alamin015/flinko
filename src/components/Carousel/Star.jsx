/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaStarHalfStroke } from "react-icons/fa6";
const Star = ({ star }) => {
  const myStars = Array.from({ length: 5 }, (ele, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {star >= index + 1 ? (
          <FaStar color='#FFD700' />
        ) : star >= number ? (
          <FaStarHalfStroke color='#FFD700' />
        ) : (
          <CiStar color='#FFD700' />
        )}
      </span>
    );
  });
  return <div className='flex items-center gap-2'>{myStars}</div>;
};

export default Star;
