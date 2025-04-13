const products = [
    { id: 1, name: "Smartphone", price: "$499", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Laptop", price: "$999", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Headphones", price: "$199", img: "https://via.placeholder.com/150" },
  ];
  
  const Products = () => {
    return (
      <section id="products" className="p-8 bg-white">
        <h3 className="text-2xl font-semibold text-center mb-6">Our Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="p-4 border rounded-lg shadow-md">
              <img src={product.img} alt={product.name} className="w-full rounded-lg" />
              <h4 className="text-lg font-bold mt-2">{product.name}</h4>
              <p className="text-blue-600 font-semibold">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Products;
  
