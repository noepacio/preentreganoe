import Image from 'next/image';
import Link from 'next/link';
import { useAppContext } from '@/contexts/AppContext';
import { RxHamburgerMenu } from 'react-icons/rx';
import HomeContainer from '@/containers/HomeContainer';
import CardsContainer from '@/containers/CardsContainer';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20 bg-black px-5 text-white text-xl'>
      <Link href={"/"}>Disney+</Link>
      <nav className='hidden sm:block'>
        <ul className='flex justify-end items-center gap-10'>
          <li>
            <Link href={"#peliculas-section"}>Películas</Link>
          </li>
          <li>
            <Link href={"#series-section"}>Series</Link>
          </li>
          <li>
            <Link href={"#about-section"}>Sobre Nosotros</Link>
          </li>
        </ul>
      </nav>
      <div className='sm:hidden'>
        <RxHamburgerMenu size={20} color={`#ffffff`} />
      </div>
    </div>
  );
};

export default Navbar;
