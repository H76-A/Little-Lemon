/* eslint-disable react/no-unescaped-entities */
import Button from '../Button';
import images from '../../data/images';
import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section>
      <figure
        className="h-[600px] sm:h-[630px] xl:h-[575px] bg-no-repeat bg-cover bg-center sm:bg-right-top mx-auto text-left relative overlay"
        style={{ backgroundImage: `url(${images.aboutBg})` }}
        alt="Background Image">
        <div className="absolute top-32 left-8 lg:left-14">
          <div>
            <div>
              <h1 className="text-lightOrange text-3xl sm:text-4xl md:text-5xl lg:text-6xl capitalize font-bold pb-14">
                It's not just food,
                <br />
                it's an experience
              </h1>
              <p className="w-11/12 md:w-5/12 text-highlightGrey text-justify font-medium">
                Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant
                has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.
              </p>
            </div>

            <nav className='space-x-6 mt-4'>
              <Link to="/reservation">
                <Button
                  className="mt-4 hover:bg-lightOrange"
                  type="button"
                  role="link"
                  aria-label="Reserve Table">
                  Reserve Table
                </Button>
              </Link>
              <Link to="/menu">
                <Button
                  className="mt-4 hover:bg-lightOrange"
                  type="button"
                  role="link"
                  aria-label="Order Online">
                  Order Online
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </figure>
    </section>
  );
};

export default AboutHero;
