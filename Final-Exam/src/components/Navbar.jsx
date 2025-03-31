import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/Auth/AuthApi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

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

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/students" className="py-2 px-4 hover:text-gray-400">Student List</Link>
          <Link to="/add-student" className="py-2 px-4 hover:text-gray-400">Add Student</Link>

          {user ? (
            <button 
              onClick={handleLogout} 
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-400 transition">
              Login
            </Link>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-800 p-4">
          <Link to="/students" className="block text-white py-2 px-4 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Student List</Link>
          <Link to="/add-student" className="block text-white py-2 px-4 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Add Student</Link>

          {user ? (
            <button 
              onClick={handleLogout} 
              className="block bg-red-600 text-white py-2 px-4 hover:bg-red-400 w-full text-left rounded-lg transition"
            >
              Logout
            </button>
          ) : (
            <Link 
              to="/login" 
              className="block bg-blue-600 text-white py-2 px-4 hover:bg-blue-400 w-full rounded-lg transition" 
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
