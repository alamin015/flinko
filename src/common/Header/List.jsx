import { menu } from "./Link";

const List = () => {
  return menu.map((item, index) => (
    <li key={index} className='lg:mb-0 mb-5'>
      <a href={item.path} className='text-white font-base'>
        {item.label}
      </a>
    </li>
  ));
};

export default List;
