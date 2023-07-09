import Card from '../Card';
import { specialsDishes } from '../../data/specialDishes'
import Button from '../Button';
import { Link } from 'react-router-dom';

const Highlights = () => {
  return (
    <section className="p-6">
      <div className="flex items-center justify-center gap-x-14 sm:gap-x-28 md:gap-x-52 lg:gap-x-96 xl:gap-x-[48rem] ">
        <h2 className="font-karla text-primaryGreen text-3xl md:text-5xl font-semibold ">Specials</h2>
        <Link to="/menu">
          <Button
            className="hover:bg-primaryGreen"
            type="button"
            role="link"
            aria-label="Explore Menu">
            Explore Menu
          </Button>
        </Link>
      </div>
      {/* Cards */}
      <div className="flex flex-wrap items-center justify-center sm:gap-x-6 md:gap-x-20 lg:gap-x-16 gap-y-12 py-12">
        {specialsDishes.map((dish) => {
          return (
            <Card
              key={dish.id}
              name={dish.name}
              price={dish.price}
              img={dish.img}
              description={dish.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Highlights;
