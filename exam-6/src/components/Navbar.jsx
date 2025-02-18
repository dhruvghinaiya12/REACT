import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-purple-800 to-pink-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-3xl font-bold text-cyan-300 hover:text-cyan-400 transition">
            🌍 CountryInfo
          </Link>

          <button
            className="sm:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            {isOpen ? "✖" : "☰"}
          </button>

          <div className="relative">
            <input
              type="text"
              placeholder="Search Countries..."
              className="px-4 py-2 w-52 rounded-lg bg-white/20 text-white placeholder-white/60 focus:ring focus:ring-cyan-300 border border-cyan-400"
            />
          </div>

          <ul className="hidden sm:flex space-x-6">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition">
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
                className="block px-4 py-2 hover:bg-pink-700 rounded transition"
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
