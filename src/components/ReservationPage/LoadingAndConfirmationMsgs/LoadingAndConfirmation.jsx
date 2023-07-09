/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import ConfirmationMessage from './ConfirmationMessage';
import { resetFormFields } from '../../../utils/resetFormFields';

const LoadingAndConfirmation = ({ reservationData, setReservationData }) => {
  const { loading, showConfirmationMsg } = reservationData;

  useEffect(() => {
    if (loading) {
      const loadingTimer = setTimeout(() => {
        setReservationData((prevState) => ({
          ...prevState,
          loading: false,
        }));
      }, 3000);

      return () => clearTimeout(loadingTimer);
    }
  }, [loading, setReservationData]);

  useEffect(() => {
    if (showConfirmationMsg) {
      const confirmationTimer = setTimeout(() => {
        setReservationData((prevState) => ({
          ...prevState,
          showConfirmationMsg: false,
        }));
        resetFormFields(setReservationData); // Reset the form fields after the confirmation msg disappears
      }, 5000);

      return () => clearTimeout(confirmationTimer);
    }
  }, [showConfirmationMsg, setReservationData]);

  return (
    <>
      <LoadingSpinner loading={loading} />
      <ConfirmationMessage
        loading={loading}
        showConfirmationMsg={showConfirmationMsg}
      />
    </>
  );
};

export default LoadingAndConfirmation;
