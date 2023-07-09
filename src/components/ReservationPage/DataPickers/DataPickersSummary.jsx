/* eslint-disable react/prop-types */
import { BsFillCalendarMinusFill } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
import { LuAlarmClock } from 'react-icons/lu';
import { LiaGlassCheersSolid } from 'react-icons/lia';

const DataPickersSummary = ({ data, onUserInfoChange }) => {
  const { selectedSeating, selectedDate, selectedTime, selectedOccasion, selectedDiners, policyAgreement } = data;

  const togglePolicyAgreement = () => {
    onUserInfoChange('policyAgreement', !policyAgreement);
  };

  return (
    <aside className="pt-8 relative md:left-20 ">
      <ul className="mt-2 grid grid-cols-2 gap-8">
        <li className="text-white text-2xl flex gap-x-4 items-center">
          <BsFillCalendarMinusFill size={25} /> {selectedDate.slice(0, 7)}
        </li>
        <li className="text-white text-xl flex gap-x-4 items-center ">
          <HiUserGroup size={25} /> {selectedDiners + ' Diners'}
        </li>
        <li className="text-white text-xl flex gap-x-4 items-center ">
          <LuAlarmClock size={25} /> {`${selectedTime}`}
        </li>
        <li className="text-white text-xl flex gap-x-4 items-center">
          <LiaGlassCheersSolid size={25} /> {selectedOccasion}
        </li>
        <li className="text-white text-xl col-start-1 col-end-3 flex justify-center items-center">
          {selectedSeating.charAt(0).toUpperCase() + selectedSeating.slice(1)} Seating
        </li>
        <li className="text-white text-lg flex justify-start items-center"></li>
      </ul>

      <label
        htmlFor="privacy-policy"
        className="font-karla text-white font-semibold flex justify-center gap-x-6 mr-6 items-center py-4">
        <input
          name="privacy-policy"
          type="checkbox"
          id="privacy-policy"
          className="sr-only"
          checked={policyAgreement}
          onChange={togglePolicyAgreement}
          aria-labelledby="privacy-policy-label"
          aria-checked={policyAgreement}
        />
        <span
          className={`h-6 w-6 block rounded-full border-2 border-solid  relative ${
            !policyAgreement ? 'border-lightOrange border-[3px]' : 'border-highlightGrey'
          }`}>
          <span
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 rounded-full h-2 w-2
             transition duration-300  ${policyAgreement ? 'scale-100 ' : 'scale-0'} `}></span>
        </span>
        Agree to our friendly privacy policy
      </label>
    </aside>
  );
};

export default DataPickersSummary;
