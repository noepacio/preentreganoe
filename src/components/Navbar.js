import Image from 'next/image';
import { useAppContext } from '@/contexts/AppContext';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20 bg-gray-900 px-5 text-white text-xl'>Disney+
      <nav className='hidden sm:block'>
        <ul className='flex justify-end items-center gap-10'>
          <li>Películas</li>
          <li>Series</li>
        </ul>
      </nav>
      <div className='sm:hidden'>
        <RxHamburgerMenu size={20} color={`#ffffff`} />
      </div>
    </div>
  );
};

export default Navbar;
