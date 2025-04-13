
import React, { useState } from 'react';

const TextUpdater = () => {
  const [text, setText] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Text Updater</h1>
      <input
        type="text"
        className="border-2 border-blue-500 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-4 text-lg text-gray-700">
        You typed: <span className="font-semibold text-blue-700">{text}</span>
      </p>
    </div>
  );
};

export default TextUpdater;
