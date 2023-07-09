/* eslint-disable react/no-unescaped-entities */
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import images from '../data/images';

const NotFound = () => {
  return (
    <section className="pt-16 pb-24 px-6 sm:px-16 flex flex-col space-y-24 md:flex-row md:justify-evenly items-center ">
      <div className="flex flex-col  ">
        <div className="order-2 md:order-1">
          <h1 className="my-2 text-primaryGreen w-full font-bold text-3xl">Oops! we don't have the ingredients for this page yet!</h1>
          <p className="my-2 text-highlightBlack ">Sorry about that! Please visit our hompage to get where you need to go.</p>

          <Link to="/">
            <Button
              className="mt-8 hover:bg-primaryGreen hover:shadow-lg px-8 "
              type="button"
              role="link"
              aria-label="Take me there!">
              Take me there!
            </Button>
          </Link>
        </div>
        <img
          src={images.notFound}
          className="opacity-50  md:scale-[0.6] relative md:right-24 lg:right-40 order-1 md:order-2 mb-10 "
        />
      </div>

      <div>
        <img src={images.powerOut} />
      </div>
    </section>
  );
};

export default NotFound;
