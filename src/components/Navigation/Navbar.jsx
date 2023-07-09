import { NavLink } from 'react-router-dom';
import images from '../../data/images';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="flex justify-between md:justify-around items-center p-5 md:px-8 md:py-6 border-b-highlightGrey border-[1px]">
      <div>
        <NavLink
          to={'/'}
          end>
          <img
            className="xl:w-[180px]"
            src={images.headerLogo}
            alt="Litte Lemon Logo"
          />
        </NavLink>
      </div>

      {/* Mobile Menu */}
      {toggleMenu && <MobileNavbar setToggleMenu={setToggleMenu} />}

      {/* Desktop Menu */}
      <div className="hidden md:block">
        <ul className="flex text-2xl space-x-4 lg:space-x-14  text-primaryGreen font-bold font-markazi ">
          <li className="hover:text-lightOrange">
            <NavLink
              to="/"
              end>
              Home
            </NavLink>
          </li>
          <li className="hover:text-lightOrange">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hover:text-lightOrange">
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li className="hover:text-lightOrange">
            <NavLink to="/reservation">Reservation</NavLink>
          </li>
          <li className="hover:text-lightOrange">
            <NavLink to="/orderonline">Order Online</NavLink>
          </li>
          <li className="hover:text-lightOrange">
            <NavLink to="/login">Log In</NavLink>
          </li>
        </ul>
      </div>
      <GiHamburgerMenu
        className="md:hidden"
        onClick={() => setToggleMenu(true)}
        size={'1.5rem'}
        aria-label="Open Menu"
      />
    </nav>
  );
};

export default Navbar;
