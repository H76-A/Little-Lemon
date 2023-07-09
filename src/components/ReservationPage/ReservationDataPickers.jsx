/* eslint-disable react/prop-types */
import RadioButtons from './DataPickers/RadioButtons';
import DateComponent from './DataPickers/DateComponent';
import TimePicker from './DataPickers/TimePicker';
import OccasionPicker from './DataPickers/OccasionPicker';
import DinersPicker from './DataPickers/DinersPicker';

const ReservationDataPickers = ({ selectedSeating, selectedDate, selectedTime, selectedOccasion, selectedDiners, onReservationDataChange }) => {
  return (
    <>
      <fieldset className="flex flex-col items-center sm:flex-row sm:justify-between ">
        <RadioButtons
          selectedSeating={selectedSeating}
          onSeatingChange={(value) => onReservationDataChange('selectedSeating', value)}
        />
      </fieldset>

      <div className="sm:space-y-10 ">
        <fieldset className="flex flex-col items-center sm:flex-row sm:justify-between">
          <DateComponent
            selectedDate={selectedDate}
            setSelectedDate={(value) => onReservationDataChange('selectedDate', value)}
          />
          <TimePicker
            selectedTime={selectedTime}
            setSelectedTime={(value) => onReservationDataChange('selectedTime', value)}
            selectedDate={selectedDate}
          />
        </fieldset>

        <fieldset className="flex flex-col items-center  sm:flex-row sm:justify-between">
          <OccasionPicker
            selectedOccasion={selectedOccasion}
            setSelectedOccasion={(value) => onReservationDataChange('selectedOccasion', value)}
          />
          <DinersPicker
            selectedDiners={selectedDiners}
            setSelectedDiners={(value) => onReservationDataChange('selectedDiners', value)}
          />
        </fieldset>
      </div>
    </>
  );
};

export default ReservationDataPickers;
