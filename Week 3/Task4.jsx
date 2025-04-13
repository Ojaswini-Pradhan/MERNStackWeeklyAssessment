import React from 'react';

const ButtonComponent = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Click Me
      </button>
    </div>
  );
};

export default ButtonComponent;
