import images from '../../data/images';

const MenuHeader = () => {
  return (
    <>
      <h1 className="text-center font-markazi text-3xl md:text-6xl text-primaryGreen py-6">Little Lemon Menu</h1>

      <div className="flex flex-col md:flex-row md:items-center md:justify-evenly px-6">
        <div>
          <h2 className="font-markazi text-primaryGreen text-2xl md:text-4xl mb-4">Our Menu</h2>
          <p className="text-highlightBlack text-lg text-justify md:text-xl max-w-sm md:max-w-lg font-karla">
            At Little Lemon, we take pride in our diverse and enticing menu. Explore a variety of Italian dishes that showcase the essence of Italian culinary
            traditions. From appetizers to desserts, our menu offers a delightful selection of antipasti, pasta, risotto, seafood, meat, and vegetarian options.
            Each dish is thoughtfully prepared by our talented chefs, ensuring a memorable dining experience. Join us and savor the flavors of Italy with every
            bite.
          </p>
        </div>
        <figure className="max-w-screen-lg mt-4">
          <img
            className="h-80 md:h-[30rem]"
            src={images.menuBg}
            alt="Restaurant Atmosphere"
          />
          <figcaption className="sr-only">Restaurant Atmosphere</figcaption>
        </figure>
      </div>
    </>
  );
};

export default MenuHeader;
