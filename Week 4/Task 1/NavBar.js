const Navbar = () => {
    return (
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">ShopEase</h1>
        <ul className="flex gap-6">
          <li><a href="#products" className="hover:underline">Products</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
