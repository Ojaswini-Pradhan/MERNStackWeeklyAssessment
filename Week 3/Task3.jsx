import React, { useState } from 'react';

const UserCard = ({ name, email }) => {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold text-blue-700 mb-2">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();  
    console.log('Submitted:', inputValue, emailValue);
    setInputValue('');  
    setEmailValue('');  
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">React Form & User Card</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center mb-10">
        <input
          type="text"
          className="border-2 border-blue-500 rounded-lg p-2 w-64 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter name..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input
          type="email"
          className="border-2 border-blue-500 rounded-lg p-2 w-64 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter email..."
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
      {inputValue && emailValue && (
        <UserCard name={inputValue} email={emailValue} />
      )}
    </div>
  );
};

export default SimpleForm;
