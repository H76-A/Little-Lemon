// eslint-disable-next-line react/prop-types
const ConfirmationMessage = ({ showConfirmationMsg, loading }) => {
  return (
    showConfirmationMsg &&
    !loading && (
      <div
        className={`mt-14 block mx-auto w-fit p-3 rounded-lg text-center font-bold font-karla bg-[#ebebeb] transition-opacity duration-500 ${
          showConfirmationMsg ? 'opacity-100' : 'opacity-0'
        }`}>
        <p className="text-lg text-primaryGreen">
          Your reservation has been confirmed. <br />
          Please check your email.
        </p>
      </div>
    )
  );
};

export default ConfirmationMessage;
