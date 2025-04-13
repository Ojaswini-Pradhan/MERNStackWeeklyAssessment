import { useState } from "react";

export default function TextUpdater() {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">Live Text Updater</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded-lg w-64 text-center shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <p className="mt-4 text-lg text-gray-700">You typed: {text}</p>
    </div>
  );
}
