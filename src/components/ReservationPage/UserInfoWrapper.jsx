/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import UserInfo from './UserInfo';

const UserInfoWrapper = ({ selectedSeating, selectedDate, selectedTime, selectedOccasion, selectedDiners, policyAgreement, handleReservationDataChange }) => {
  const [pickersCompleted, setPickersCompleted] = useState(false);

  // Check if all the pickers are completed to show the user info inputs below them
  useEffect(() => {
    const allPickersCompleted = selectedSeating !== '' && selectedDate !== '' && selectedTime !== '' && selectedOccasion !== '' && selectedDiners !== '';
    setPickersCompleted(allPickersCompleted);
  }, [selectedSeating, selectedDate, selectedTime, selectedOccasion, selectedDiners]);

  if (!pickersCompleted) {
    return null;
  }

  return (
    <fieldset className="pt-12">
      <UserInfo
        data={{
          selectedSeating,
          selectedDate,
          selectedTime,
          selectedOccasion,
          selectedDiners,
          policyAgreement,
        }}
        onUserInfoChange={handleReservationDataChange}
      />
    </fieldset>
  );
};

export default UserInfoWrapper;
