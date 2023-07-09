/* eslint-disable react/prop-types */
const RadioButtons = ({ selectedSeating, onSeatingChange }) => {
  const handleSeatingChange = (value) => {
    onSeatingChange(value);
  };

  return (
    <>
      <label
        htmlFor="indoor-seating"
        className="font-karla text-white font-semibold text-2xl flex gap-x-[4.1rem] sm:gap-x-14 items-center py-4 cursor-pointer">
        Indoor Seating
        <input
          name="seating"
          type="radio"
          id="indoor-seating"
          value="indoor"
          className="sr-only"
          checked={selectedSeating === 'indoor'}
          onChange={() => handleSeatingChange('indoor')}
          aria-checked={selectedSeating === 'indoor'}
          aria-labelledby="indoor-seating"
        />
        <span
          role="radio"
          className={`h-6 w-6 block rounded-full border-solid  border-[3px] border-highlightGrey relative`}>
          <span
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 rounded-full h-2 w-2
             transition duration-300  ${selectedSeating === 'indoor' ? 'scale-100 ' : 'scale-0'} `}></span>
        </span>
      </label>

      <label
        htmlFor="outdoor-seating"
        className="font-karla text-white font-semibold text-2xl flex gap-x-12 items-center py-4 cursor-pointer ">
        Outdoor Seating
        <input
          name="seating"
          type="radio"
          id="outdoor-seating"
          value="outdoor"
          className="sr-only"
          checked={selectedSeating === 'outdoor'}
          onChange={() => handleSeatingChange('outdoor')}
          aria-checked={selectedSeating === 'outdoor'}
          aria-labelledby="outdoor-seating"
        />
        <span
          role="radio"
          className={`h-6 w-6 block rounded-full border-solid  border-[3px] border-highlightGrey relative`}>
          <span
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 rounded-full h-2 w-2
             transition duration-300  ${selectedSeating === 'outdoor' ? 'scale-100 ' : 'scale-0'} `}></span>
        </span>
      </label>
    </>
  );
};

export default RadioButtons;
