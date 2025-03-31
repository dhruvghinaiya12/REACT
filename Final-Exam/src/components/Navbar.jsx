import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <div className="text-xl font-semibold">
          <Link to="/students" className="hover:text-gray-400">
            Student Management System
          </Link>
        </div>

        <div className="lg:hidden">
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex space-x-4">
          <Link to="/students" className="hover:text-gray-400">Student List</Link>
          <Link to="/add-student" className="hover:text-gray-400">Add Student</Link>
          <Link to="/login" className="hover:text-gray-400">Login</Link>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-800 p-4">
          <Link to="/students" className="block text-white py-2 px-4 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Student List</Link>
          <Link to="/add-student" className="block text-white py-2 px-4 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Add Student</Link>
          <Link to="/login" className="block text-white py-2 px-4 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
