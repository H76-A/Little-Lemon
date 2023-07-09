import images from '../../data/images';
const AboutUs = () => {
  return (
    <section className="flex flex-col items-center lg:flex-row lg:justify-around lg:items-start py-16 ">
      <div className="p-6">
        <h1
          className="text-primaryYellow font-markazi text-6xl md:text-8xl pt-3"
          aria-label="Little Lemon - Chicago">
          Little Lemon
        </h1>
        <span className="font-markazi text-primaryYellow  text-4xl">Chicago</span> <br />
        <p className="text-black text-lg text-justify md:text-2xl max-w-sm md:max-w-lg font-karla">
          Located in London, little lemon provides you with with the best dishes around the world. Have a birthday that you want to celebrate? do you want to
          experience food like you never have before? reserve a table now, or order online. Little lemon is the best place for your most delicious needs!
        </p>
      </div>

      <div className="md:ml-24 lg:ml-0">
        <figure className="relative top-6 border-[3px] border-primaryYellow">
          <img
            className="h-80"
            src={images.marioAdrianA}
            alt="The Chefs Mario and Adrian"
          />
          <figcaption className="sr-only">The Chefs Mario and Adrian</figcaption>
        </figure>
        <figure className="hidden md:block relative right-32 lg:right-60 border-[3px] border-primaryYellow">
          <img
            className="h-80 w-full"
            src={images.restauranFood}
            alt="Restaurant food"
          />
          <figcaption className="sr-only">Restaurant food</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default AboutUs;
