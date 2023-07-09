/* eslint-disable react/prop-types */
import { BsFillCalendarMinusFill } from 'react-icons/bs';
import { FaAngleDown } from 'react-icons/fa';
import Datepicker from 'tailwind-datepicker-react';
import { useState, useRef } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick';

const DateComponent = ({ selectedDate, setSelectedDate }) => {
  // Tailwind Datepicker 3rd party state
  const [show, setShow] = useState(false);

  // const [selectedDate, setSelectedDate] = useState('');
  const [validationMessage, setValidationMessage] = useState(false);
  const datepickerRef = useRef(null);

  // closing the DatePicker when clicking outside it
  useOutsideClick(datepickerRef, setShow);

  // Tailwind Datepicker 3rd party handle close when selecting a date
  const handleClose = (state) => {
    setShow(state);
  };

  const handleChange = (selectedDate) => {
    setSelectedDate(selectedDate);
    setValidationMessage(false); // Hide the validation message when a date is selected
  };

  const handleClick = () => {
    setShow((prevShow) => !prevShow);
    setValidationMessage(true);
  };

  const today = new Date();
  const previousDay = new Date();
  previousDay.setDate(today.getDate() - 1);

  const options = {
    title: 'Reservation Date',
    autoHide: true,
    todayBtn: true,
    clearBtn: true,
    minDate: previousDay,
    theme: {
      background: '',
      todayBtn: 'bg-primaryGreen focus:bg-primaryGreen focus:ring-primaryGreen/50 hover:bg-primaryGreen/80',
      clearBtn: 'focus:ring-0',
      icons: '',
      text: '',
      disabledText: '',
      input: '',
      inputIcon: '',
      selected: 'bg-primaryGreen',
    },
    icons: {
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: 'top-[29rem] sm:top-[24rem] md:top-[26rem] mt-10 w-[250px]',
    defaultDate: today,
    language: 'en',
  };

  return (
    <div ref={datepickerRef}>
      <legend className="font-karla text-white font-semibold text-2xl py-4 ">Date</legend>
      <label
        htmlFor="datePicker"
        className="font-karla text-white text-xl sr-only">
        Select a date
      </label>
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}>
        <div
          className="w-[250px] flex items-center justify-between bg-white px-4 py-2 rounded-lg cursor-pointer"
          onClick={handleClick}>
          <BsFillCalendarMinusFill
            size={28}
            className="text-primaryGreen/90"
          />
          <span className="text-primaryGreen text-xl font-karla">{selectedDate ? selectedDate : 'Select Date'}</span>
          <FaAngleDown
            size={24}
            className="text-primaryGreen"
          />
          <input
            id="datePicker"
            name="date"
            type="text"
            className="sr-only"
            placeholder="Select Date"
            value={selectedDate}
            onChange={handleChange}
            readOnly
            required
          />
        </div>
      </Datepicker>
      {validationMessage && <p className="absolute text-lightOrange mt-2">Please select a date.</p>}
    </div>
  );
};

export default DateComponent;
