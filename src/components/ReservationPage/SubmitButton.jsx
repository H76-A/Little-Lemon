/* eslint-disable react/prop-types */
import Button from '../Button';

const SubmitButton = ({
  selectedSeating,
  selectedDate,
  selectedTime,
  selectedOccasion,
  selectedDiners,
  firstName,
  lastName,
  email,
  phoneNumber,
  policyAgreement,
}) => {
  // check for disabling the submit button if all inputs aren't filled
  const disabled =
    !selectedSeating ||
    !selectedDate ||
    !selectedTime ||
    !selectedOccasion ||
    !selectedDiners ||
    !firstName ||
    !lastName ||
    !email ||
    !phoneNumber ||
    !policyAgreement;

  return (
    <Button
      className="hover:bg-lightOrange block mx-auto px-8 text-xl group relative mt-52 "
      type="submit"
      disabled={disabled}
      processing={disabled}>
      {selectedSeating && selectedDate && selectedTime && selectedOccasion && selectedDiners ? 'Confirm Reservation' : 'Reserve Table'}
      {disabled && (
        <span className="absolute w-full bottom-14 left-1/2 -translate-x-1/2 bg-gray-200 text-gray-600 rounded-lg p-1 text-sm opacity-0 transition-opacity duration-400 pointer-events-none group-hover:opacity-90   ">
          Please fill all required fields.
        </span>
      )}
    </Button>
  );
};

export default SubmitButton;
