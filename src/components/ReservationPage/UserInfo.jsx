/* eslint-disable react/prop-types */
import DataPickersSummary from './DataPickers/DataPickersSummary';

const UserInfo = ({ onUserInfoChange, data }) => {
  const handleUserInfoChange = (fieldName, event) => {
    const { value } = event.target;
    onUserInfoChange(fieldName, value);
  };

  return (
    <>
      <div className="flex flex-col items-center  sm:flex-row sm:justify-between">
        <label
          htmlFor="firstName"
          className="relative">
          <span className="font-karla block text-white font-semibold text-2xl py-4  before:content-['*'] before:mr-2 before:text-lightOrange  before:text-4xl before:relative before:top-2.5">
            First Name
          </span>
          <input
            className="w-[250px] focus:outline-none focus:ring-2  focus:ring-lightOrange  bg-white px-4 py-2 rounded-lg"
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            required
            onChange={(event) => handleUserInfoChange('firstName', event)}
            aria-label="First Name"
            aria-required="true"
          />
        </label>

        <label
          htmlFor="lastName"
          className="relative">
          <span className="font-karla block text-white font-semibold text-2xl py-4 required before:content-['*'] before:mr-2 before:text-lightOrange before:text-4xl before:relative before:top-2.5">
            Last Name
          </span>
          <input
            className="w-[250px] focus:outline-none focus:ring-2 focus:ring-lightOrange  bg-white px-4 py-2 rounded-lg"
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            required
            onChange={(event) => handleUserInfoChange('lastName', event)}
            aria-label="Last Name"
            aria-required="true"
          />
        </label>
      </div>

      <div className="flex flex-col items-center  sm:flex-row sm:justify-between">
        <label
          htmlFor="email"
          className="relative">
          <span className="font-karla block text-white font-semibold text-2xl py-4 required before:content-['*'] before:mr-2 before:text-lightOrange before:text-4xl before:relative before:top-2.5">
            Email
          </span>
          <input
            className="w-[250px] focus:outline-none focus:ring-2 focus:ring-lightOrange  bg-white px-4 py-2 rounded-lg"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            onChange={(event) => handleUserInfoChange('email', event)}
            aria-label="Email"
            aria-required="true"
          />
        </label>

        <label
          htmlFor="phoneNumber"
          className="relative">
          <span className="font-karla block text-white font-semibold text-2xl py-4 required before:content-['*'] before:mr-2 before:text-lightOrange before:text-4xl before:relative before:top-2.5">
            Phone Number
          </span>
          <input
            className="w-[250px] focus:outline-none focus:ring-2 focus:ring-lightOrange  bg-white px-4 py-2 rounded-lg"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number"
            required
            onChange={(event) => handleUserInfoChange('phoneNumber', event)}
            aria-label="Phone Number"
            aria-required="true"
          />
        </label>
      </div>

      <div className="flex flex-col items-center  sm:flex-row sm:justify-between">
        <label
          htmlFor="specialRequests"
          className="relative">
          <span className="font-karla block text-white font-semibold text-2xl py-4 ">Special Requests</span>
          <textarea
            className="w-[250px] h-[150px] resize-none focus:outline-none focus:ring-2 focus:ring-lightOrange  bg-white px-4 py-2 rounded-lg"
            id="specialRequests"
            name="specialRequests"
            placeholder="Enter any special requests"
            onChange={(event) => handleUserInfoChange('specialRequests', event)}
            aria-label="Special Requests"></textarea>
        </label>

        <DataPickersSummary
          data={data}
          onUserInfoChange={onUserInfoChange}
        />
      </div>
    </>
  );
};

export default UserInfo;
