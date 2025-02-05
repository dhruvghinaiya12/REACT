import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-semibold">
            <Link to="/" className="hover:text-gray-400 transition-colors">Home</Link>
          </div>
          <div className="space-x-6">
            <Link to="/Blogs" className="text-white hover:text-gray-400 transition-colors">Blogs</Link>
            <Link to="/about" className="text-white hover:text-gray-400 transition-colors">About</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
