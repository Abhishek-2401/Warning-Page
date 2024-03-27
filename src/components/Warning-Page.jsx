import React from 'react';

const WarningPage = ({ type }) => {
  let imgSrc, message, buttonText;

  switch (type) {
    case 'something-went-wrong':
      imgSrc = 'something-went-wrong.jpg';
      message = 'Something went wrong';
      buttonText = 'Go Back to Home';
      break;
    case 'coming-soon':
      imgSrc = 'coming-soon.jpg';
      message = 'Something went wrong';
      buttonText = 'Go Back to Home';
      break;
      case 'error-404':
      imgSrc = 'error-404.jpg';
      message = 'Something went wrong';
      buttonText = 'Go Back to Home';
      break;
    default:
      imgSrc = 'error-404.jpg';
      message = 'Something went wrong';
      buttonText = 'Go Back to Home';
      break;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={imgSrc} alt="Warning" className="mb-4" style={{ maxWidth: '300px' }} />
      <p className="text-lg text-[#000000] font-semibold mb-4 text-center">{message}</p>
      <button className="border border-black text-black font-medium py-2 px-6 rounded-lg">
        {buttonText}
      </button>
    </div>
  );
};

export default WarningPage;
