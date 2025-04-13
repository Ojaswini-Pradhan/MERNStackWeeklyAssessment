const Button = ({ text }) => {
    const handleClick = () => {
      console.log("Button clicked!");
    };
  
    return (
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        {text}
      </button>
    );
  };
  
  const App = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <Button text="Click Me" />
      </div>
    );
  };
  
  export default App;
  
