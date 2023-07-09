import { FaAngleDown } from 'react-icons/fa';
import { LiaGlassCheersSolid } from 'react-icons/lia';
import { useState, useRef } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick';

// eslint-disable-next-line react/prop-types
const OccasionPicker = ({ selectedOccasion, setSelectedOccasion }) => {
  const occasionOptions = ['Birthday', 'Anniversary', 'Engagement'];

  const [showOptions, setShowOptions] = useState(false);
  const [requiredMessage, setRequiredMessage] = useState(false);
  const occasionPickerRef = useRef(null);

  // Closing the OccasionPicker when clicking outside it
  useOutsideClick(occasionPickerRef, setShowOptions);

  const handleSelect = (occasion) => {
    setSelectedOccasion(occasion);
    setShowOptions(false);
    setRequiredMessage(false);
  };

  const handleClick = () => {
    if (!showOptions) {
      setRequiredMessage(true);
    }
  };

  const toggleOptions = () => setShowOptions(!showOptions);

  return (
    <div
      ref={occasionPickerRef}
      onClick={handleClick}
      className={`relative mt-10 sm:mt-0 `}>
      <legend className="font-karla block text-white font-semibold text-2xl py-4">Occasion</legend>
      <label
        htmlFor="occasionPicker"
        className="font-karla text-white text-xl sr-only">
        Select an occasion
      </label>
      <div
        id="occasion"
        className="w-[250px] flex items-center justify-between bg-white px-4 py-2 rounded-lg cursor-pointer"
        onClick={toggleOptions}>
        <LiaGlassCheersSolid
          size={'2rem'}
          className="text-primaryGreen"
        />
        <span className="text-primaryGreen text-xl font-karla">{selectedOccasion ? selectedOccasion : 'Select Occasion'}</span>
        <FaAngleDown
          size={24}
          className="text-primaryGreen"
        />
        <input
          id="occasionPicker"
          name="occasion"
          type="text"
          className="sr-only"
          placeholder="Select Occasion"
          value={selectedOccasion}
          onChange={(e) => setSelectedOccasion(e.target.value)}
          readOnly
          required
        />
      </div>
      {requiredMessage && <p className="absolute text-lightOrange mt-2">Please select an occasion.</p>}

      {showOptions && (
        <div className="absolute top-[8rem] left-0 bg-white text-primaryGreen p-2 rounded-lg w-full z-10 ">
          {occasionOptions.map((occasion) => (
            <div
              key={occasion}
              className="p-3 cursor-pointer font-semibold hover:bg-primaryGreen/80 hover:rounded-md duration-200 text-center hover:text-white border border-dashed hover:border-solid"
              onClick={() => handleSelect(occasion)}>
              {occasion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OccasionPicker;
