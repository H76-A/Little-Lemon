import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { testimonialsData } from '../../../data/testimonials';

const TestimonialsSlider = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handlePrevReview = () => {
    setCurrentReview((prevReview) => (prevReview === 0 ? testimonialsData.length - 1 : prevReview - 1));
  };

  const handleNextReview = () => {
    setCurrentReview((prevReview) => (prevReview === testimonialsData.length - 1 ? 0 : prevReview + 1));
  };

  return (
    <div className="max-w-sm lg:max-w-lg">
      <div className="relative">
        {/* Current review */}
        <article className="p-8 pb-20 bg-white rounded-lg">
          <figure className="flex items-center">
            <img
              className="w-16 h-16 rounded-full object-cover"
              src={testimonialsData[currentReview].image}
              alt={testimonialsData[currentReview].name}
            />
            <figcaption className="ml-4">
              <h3
                className="text-lg md:text-2xl text-primaryGreen font-karla font-medium"
                aria-label="Reviewer Name">
                {testimonialsData[currentReview].name}
              </h3>
            </figcaption>
          </figure>
          <blockquote
            className="mt-2 text-lg font-medium flex flex-col"
            aria-label="Review">
            <BiSolidQuoteLeft
              size={40}
              color="#9CA3AF"
              className="self-center mb-4"
            />
            <p className='text-primaryGreen font-karla '>&quot;{testimonialsData[currentReview].review}&quot;</p>
          </blockquote>
        </article>

        {/* Previous review button */}
        <button
          className="absolute right-20 bottom-10 transform translate-y-1/2 bg-white hover:bg-lightOrange group p-2 rounded-full shadow-lg"
          onClick={handlePrevReview}
          aria-label="Previous Review">
          <FaAngleLeft className="h-6 w-6 text-gray-600 group-hover:text-white" />
        </button>

        {/* Next review button */}
        <button
          className="absolute right-5 bottom-10 transform translate-y-1/2 bg-white hover:bg-lightOrange group p-2 rounded-full shadow-lg"
          onClick={handleNextReview}
          aria-label="Next Review">
          <FaAngleRight className="h-6 w-6 text-gray-600 group-hover:text-white" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
