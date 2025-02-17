import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // state to hold search query

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    // You can also handle search logic here, like filtering countries, etc.
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">
            🌍 CountryInfo
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search Countries..."
              className="px-4 py-2 rounded-lg text-gray-800 text-white"
            />
          </div>

          <ul className="hidden sm:flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-300 transition">
                Home
              </Link>
            </li>
          </ul>
        </div>

        {isOpen && (
          <ul className="sm:hidden space-y-2 pb-4">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-blue-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
