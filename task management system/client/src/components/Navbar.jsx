import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserToken } from "../UserToken";
import Cookies from "js-cookie"
import { Role } from "../role/CheckRole";

const Navbar = () => {
const nav=useNavigate()
let user=UserToken()

const isLogged = Cookies.get("isLogged"); 

const logout = () => {
  Cookies.remove("isLogged");
  Cookies.remove("token"); 
  nav("/login");
};

  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">
          <Link to="/" className="hover:text-gray-400 transition-colors">
            📝 Task Management System
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-400 transition-colors">
            Dashboard
          </Link>
        {Role(["admin"])?(  <Link to="/assign-task" className="text-white hover:text-gray-400 transition-colors">
            Assign Task
          </Link>):null}
        </div>

        <div className="hidden md:flex space-x-6">
          {user?( <span className="text-white hover:text-gray-400 transition-colors">{user.name}</span>):
           (<Link to="/signup" className="text-white hover:text-gray-400 transition-colors">
            Sign Up
          </Link>)}
         
         {isLogged?(<span className="text-white hover:text-gray-400 transition-colors" onClick={logout}>Logout</span>):
         ( <Link to="/login" className="text-white hover:text-gray-400 transition-colors">
            Login
          </Link>)}
         
        </div>

        <div className="md:hidden flex items-center">
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          <label htmlFor="menu-toggle" className="text-white hover:text-gray-400 cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>
      </div>

      <div className="md:hidden peer-checked:block bg-gray-800 text-white p-4 hidden">
        <Link to="/dashboard" className="block py-2 hover:text-gray-400 transition-colors">
          Dashboard
        </Link>
        <Link to="/my-tasks" className="block py-2 hover:text-gray-400 transition-colors">
          My Tasks
        </Link>
        <Link to="/assign-task" className="block py-2 hover:text-gray-400 transition-colors">
          Assign Task
        </Link>
        {user?( <span className="text-white hover:text-gray-400 transition-colors">{user.name}</span>):
           (<Link to="/signup" className="text-white hover:text-gray-400 transition-colors">
            Sign Up
          </Link>)}
          {user?(<span className="text-white hover:text-gray-400 transition-colors">Logout</span>):
         ( <Link to="/login" className="text-white hover:text-gray-400 transition-colors">
            Login
          </Link>)}
      </div>
    </nav>
  );
};

export default Navbar;
