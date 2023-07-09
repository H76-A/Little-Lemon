/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const MobileNavbar = ({ setToggleMenu }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed top-0 left-0 w-full h-full bg-highlightGrey flex justify-center items-center slide-bottom z-10  ">
      <MdOutlineRestaurantMenu
        size={'2.5rem'}
        className="fixed top-5 right-5 text-primaryGreen hover:text-lightOrange"
        onClick={() => setToggleMenu(false)}
        aria-label="Close Menu"
      />
      <ul
        role="menu"
        className="flex flex-col items-center justify-center  space-y-3 text-2xl md:text-3xl  text-primaryGreen font-bold font-markazi ">
        <li className="hover:text-lightOrange">
          <NavLink
            onClick={() => setToggleMenu(false)}
            to={'/'}
            role="menuitem">
            Home
          </NavLink>
        </li>
        <li className="hover:text-lightOrange">
          <NavLink
            onClick={() => setToggleMenu(false)}
            to={'/about'}
            role="menuitem">
            About
          </NavLink>
        </li>
        <li className="hover:text-lightOrange">
          <NavLink
            onClick={() => setToggleMenu(false)}
            to={'/menu'}
            role="menuitem">
            Menu
          </NavLink>
        </li>
        <li className="hover:text-lightOrange">
          <NavLink
            onClick={() => setToggleMenu(false)}
            to={'/reservation'}
            role="menuitem">
            Reservation
          </NavLink>
        </li>
        <li className="hover:text-lightOrange">
          <NavLink
            onClick={() => setToggleMenu(false)}
            to="/orderonline"
            role="menuitem">
            Order Online
          </NavLink>
        </li>
        <li className="hover:text-lightOrange">
          <NavLink
            onClick={() => setToggleMenu(false)}
            to={'/login'}
            role="menuitem">
            Log In
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavbar;
