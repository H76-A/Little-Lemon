import { useState } from 'react';
import ReservationDataPickers from './ReservationDataPickers';
import UserInfoWrapper from './UserInfoWrapper';
import LoadingAndConfirmation from './LoadingAndConfirmationMsgs/LoadingAndConfirmation';
import SubmitButton from './SubmitButton';
import { formatDate } from '../../utils/formatDate';
import { submitAPI } from '../../data/BookingAPI';

const ReservationForm = () => {
  // Form controlled Inputs state object (plus loading and confirmation msg states)
  const [reservationData, setReservationData] = useState({
    selectedSeating: '',
    selectedDate: '',
    selectedTime: '',
    selectedOccasion: '',
    selectedDiners: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    specialRequests: '',
    policyAgreement: false,
    loading: false,
    showConfirmationMsg: false,
  });

  const handleReservationDataChange = (fieldName, value) => {
    if (fieldName === 'selectedDate') {
      value = formatDate(value); // Format the date before setting it
    }
    setReservationData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Reservation Data:', reservationData);

    // Show the loading spinner
    setReservationData((prevState) => ({
      ...prevState,
      loading: true,
    }));

    // Show confirmation message
    setReservationData((prevState) => ({
      ...prevState,
      showConfirmationMsg: true,
    }));

    submitAPI(reservationData);
  };

  return (
    <form
      className="pt-16"
      onSubmit={handleSubmit}>
      <ReservationDataPickers
        {...reservationData}
        onReservationDataChange={handleReservationDataChange}
      />

      <UserInfoWrapper
        {...reservationData}
        handleReservationDataChange={handleReservationDataChange}
      />

      <SubmitButton {...reservationData} />

      <LoadingAndConfirmation
        reservationData={reservationData}
        setReservationData={setReservationData}
      />
    </form>
  );
};

export default ReservationForm;
