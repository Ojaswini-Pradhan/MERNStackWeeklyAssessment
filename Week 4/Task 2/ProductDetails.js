const ProductDetails = ({ product, onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <img src={product.img} alt={product.name} className="w-full rounded-lg my-4" />
          <p className="text-gray-700">{product.description}</p>
          <p className="text-blue-600 font-semibold mt-2">{product.price}</p>
          <button 
            onClick={onClose} 
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default ProductDetails;
  
