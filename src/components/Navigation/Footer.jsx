import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import images from '../../data/images';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="bg-primaryGreen px-2 ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-around ">
          <div className="mb-6 md:mb-0">
            <NavLink
              onClick={scrollToTop}
              to={'/'}
              end>
              <figure>
                <img
                  src={images.footerLogo}
                  alt="Little Lemon Footer Logo"
                  className="h-32 md:h-44 w-auto"
                />
                <figcaption className="sr-only">Little Lemon</figcaption>
              </figure>
            </NavLink>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div className="text-left">
              <h4 className="mb-6  text-sm text-white font-semibold uppercase">Little Lemon</h4>
              <ul className="font-medium text-highlightGrey/80 space-y-1 ">
                <li>
                  <NavLink
                    onClick={scrollToTop}
                    to="/"
                    className=" hover:text-lightOrange">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={scrollToTop}
                    to="/about"
                    className=" hover:text-lightOrange">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={scrollToTop}
                    to="/menu"
                    className=" hover:text-lightOrange">
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={scrollToTop}
                    to="/reservation"
                    className=" hover:text-lightOrange">
                    Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={scrollToTop}
                    to="/orderonline"
                    className=" hover:text-lightOrange">
                    Order Online
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={scrollToTop}
                    to="/login"
                    className=" hover:text-lightOrange">
                    Log In
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-sm font-semibold text-white  uppercase ">Contact Us</h4>
              <div className="mb-4 sm:mb-0 lg:mb-0">
                <p className="text-highlightGrey/80">123 Street, City</p>
                <p className="text-highlightGrey/80">Email: info@example.com</p>
                <p className="text-highlightGrey/80">Phone: 123-456-7890</p>{' '}
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-sm font-semibold text-white  uppercase">Follow Us</h4>
              <div>
                <div className="flex mt-2 text-highlightGrey/80">
                  <a
                    href="#"
                    className=" hover:text-white mx-2"
                    aria-label="Facebook">
                    <FaFacebook />
                  </a>
                  <a
                    href="#"
                    className=" hover:text-white mx-2"
                    aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className=" hover:text-white mx-2"
                    aria-label="Instagram">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-2 border-gray-200/50 sm:mx-auto" />
        <small className="text-white">© 2023 Little Lemon™. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
