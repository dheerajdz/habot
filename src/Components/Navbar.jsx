const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-3 border-b bg-white">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="/habot-logo.jpg"
          alt="Habot Logo"
          className="h-10 w-auto" // Adjust height for better visibility
        />
      </div>

      {/* Links Section */}
      <div className="flex space-x-6 text-gray-600 font-poppins">
        <a href="#find-suppliers" className="hover:text-gray-800">
          Find Suppliers
        </a>
        <div className="relative group">
          <a
            href="#find-service-tags"
            className="hover:text-gray-800 flex items-center"
          >
            Find Service Tags
            <span className="ml-1">
              <img src="down-arrow.png" alt="" className="h-5 w-5" />
            </span>
          </a>
          {/* Dropdown Menu */}
          <div className="absolute hidden group-hover:block bg-white shadow-md mt-1 p-2">
            <a href="#tag1" className="block px-4 py-2 hover:bg-gray-100">
              Tag 1
            </a>
            <a href="#tag2" className="block px-4 py-2 hover:bg-gray-100">
              Tag 2
            </a>
          </div>
        </div>
      </div>

      {/* Login/Sign-Up Button */}
      <div>
        <button className="px-4 py-2 border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white">
          Login / Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
