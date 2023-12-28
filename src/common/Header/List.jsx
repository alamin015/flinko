import { menu } from "./Link";

const List = ({ setOpen }) => {
  const handleProps = () => {
    if (setOpen) {
      setOpen(false);
    } else {
      return 0;
    }
  };
  return menu.map((item, index) => (
    <li key={index} className='lg:mb-0 mb-5'>
      <a
        href={item.path}
        onClick={handleProps}
        className='text-white font-base'
      >
        {item.label}
      </a>
    </li>
  ));
};

export default List;
