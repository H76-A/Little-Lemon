/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { LuAlarmClock } from 'react-icons/lu';
import { FaAngleDown } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { fetchAPI } from '../../../data/BookingAPI';

const TimePicker = ({ selectedTime, setSelectedTime, selectedDate }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [validationMessage, setValidationMessage] = useState(false);
  const timePickerRef = useRef(null);
  const [timeOptions, setTimeOptions] = useState([]);

  // Closing the TimePicker when clicking outside it
  useOutsideClick(timePickerRef, setShowOptions);

  const handleSelect = (time) => {
    setSelectedTime(time);
    setShowOptions(false);
    setValidationMessage(false);
  };

  const handleClick = () => {
    if (!showOptions) {
      setValidationMessage(true);
    }
  };

  const toggleOptions = () => setShowOptions(!showOptions);

  useEffect(() => {
    const date = new Date(selectedDate); // Convert the selected date string to a Date object
    const availableTimes = fetchAPI(date);
    setTimeOptions(availableTimes);
    setSelectedTime('');
  }, [selectedDate]); // Set selectedTime to an empty string when selectedDate changes

  return (
    <div
      ref={timePickerRef}
      onClick={handleClick}
      className={`relative mt-10 sm:mt-0 `}>
      <legend className="font-karla block text-white font-semibold text-2xl py-4">Time</legend>
      <label
        htmlFor="timePicker"
        className="font-karla text-white text-xl sr-only">
        Select a time
      </label>
      <div
        id="time"
        className="w-[250px] flex items-center justify-between bg-white px-4 py-2 rounded-lg cursor-pointer"
        onClick={toggleOptions}>
        <LuAlarmClock
          size={28}
          className="text-primaryGreen"
        />
        <span className="text-primaryGreen text-xl font-karla">{selectedTime ? selectedTime : 'Select Time'}</span>
        <FaAngleDown
          size={24}
          className="text-primaryGreen"
        />
        <input
          id="timePicker"
          name="time"
          type="text"
          className="sr-only"
          placeholder="Select Time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          readOnly
          required
        />
      </div>
      {validationMessage && (
        <p className="text-lightOrange mt-4 absolute top-[6rem] left-0 ">
          {selectedDate ? 'Please select a time.' : 'Please select a date to see the available times.'}
        </p>
      )}

      {showOptions && selectedDate && timeOptions.length > 0 && (
        <div
          className={`absolute top-[8.5rem] left-0 bg-white text-primaryGreen p-2 rounded-lg w-full grid  ${
            selectedDate ? 'grid-cols-2' : 'grid-cols-1'
          } z-10`}>
          {timeOptions.map((time) => (
            <div
              key={time}
              className="p-2.5 z-10 cursor-pointer font-semibold hover:bg-primaryGreen/80 hover:rounded-md duration-200 text-center hover:text-white border border-dashed hover:border-solid"
              onClick={() => handleSelect(time)}>
              {time}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimePicker;
