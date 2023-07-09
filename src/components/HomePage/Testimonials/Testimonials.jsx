import TestimonialsSlider from './TestimonialsSlider';
import images from '../../../data/images';

const Testimonials = () => {
  return (
    <section className=" bg-gradient-to-r from-primaryYellow/20  to-primaryGreen/40  px-4 sm:px-6 md:px-10 ">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl py-12 text-primaryGreen font-bold  tracking-wider">Testimonials</h2>

      <div className="flex flex-wrap md:flex-nowrap justify-evenly gap-x-12 items-center">
        <TestimonialsSlider />
        <figure className="mt-10">
          <img
            className="h-[600px] w-[500px]"
            src={images.FlyingPasta}
            alt="Delicious Flying Pasta"
          />
          <figcaption className="text-primaryGreen  text-center relative bottom-14 font-medium italic">Our delicious Flying Pasta dish</figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
