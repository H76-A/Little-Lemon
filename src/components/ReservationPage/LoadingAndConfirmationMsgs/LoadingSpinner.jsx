/* eslint-disable react/prop-types */
import { FaSpinner } from 'react-icons/fa';

const LoadingSpinner = ({ loading }) => {
  return (
    loading && (
      <div className="mt-14 block mx-auto w-fit p-3 rounded-lg text-center font-bold font-karla ">
        <FaSpinner
          className="animate-spin mb-3 text-white  mt-2"
          size={24}
        />
      </div>
    )
  );
};

export default LoadingSpinner;
