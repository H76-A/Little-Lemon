import Button from './Button';
// eslint-disable-next-line react/prop-types
const Card = ({ name, price, img, description }) => {
  return (
    <article className="w-72 sm:w-80 bg-white border border-gray-200 rounded-lg shadow transition-all duration-300 hover:shadow-lg hover:bg-[whitesmoke]">
      <figure>
        <img
          className="rounded-t-lg max-h-[200px] w-full"
          src={img}
          alt={`Image of ${name}`}
        />
        <figcaption className="sr-only">{name}</figcaption>
      </figure>
      
      <div className="p-3">
        <header className="flex justify-between">
          <h3 className="mb-2 text-2xl md:text-3xl font-markazi text-primaryGreen font-bold tracking-tight">{name}</h3>
          <span className="font-karla">{price}</span>
        </header>

        <p className="mb-3 font-normal font-karla h-28   text-gray-700">{description}</p>

        <Button
          className="hover:bg-primaryGreen mt-4"
          type="button"
          aria-label={`Order Delivery for ${name}`}>
          Order Delivery
        </Button>
      </div>
    </article>
  );
};

export default Card;
