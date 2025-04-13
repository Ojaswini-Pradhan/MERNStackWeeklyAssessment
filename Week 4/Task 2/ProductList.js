import { useState } from "react";
import ProductDetails from "./ProductDetails";

const products = [
  { id: 1, name: "Smartphone", price: "Rs499", description: "Latest 5G smartphone with AI-powered camera.", img: "C:\Users\OneDrive\Desktop\img1" },
  { id: 2, name: "Laptop", price: "Rs999", description: "High-performance laptop with 16GB RAM and SSD.", img: "C:\Users\OneDrive\Desktop\img2" },
  { id: 3, name: "Headphones", price: "Rs199", description: "Noise-canceling headphones with superior sound quality.", img: "C:\Users\OneDrive\Desktop\img3" },
];

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow-md text-center">
            <img src={product.img} alt={product.name} className="w-full rounded-lg" />
            <h3 className="text-lg font-bold mt-2">{product.name}</h3>
            <p className="text-blue-600 font-semibold">{product.price}</p>
            <button 
              onClick={() => setSelectedProduct(product)} 
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
};

export default ProductList;
