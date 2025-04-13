import React, { useState } from 'react';

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();  
    console.log('Submitted Value:', inputValue);
    setInputValue(''); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">React Simple Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          className="border-2 border-blue-500 rounded-lg p-2 w-64 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
