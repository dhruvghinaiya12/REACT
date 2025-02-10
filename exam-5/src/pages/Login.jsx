import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
const Login = () => {

  const nav=useNavigate()

  const [userdata, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem("userdata")) || [];

    const user = storedUsers.find( (user) => user.email == userdata.email && user.password == userdata.password );

    if (user) {
      alert("Login Successful!");
     nav("/")
      setUserData({ email: "", password: "" });
    } else {
      alert("Invalid email or password.");
    }

  };

  return (
    <div className="flex items-center justify-center">
      <form
        className="max-w-md w-full bg-white p-8 rounded-lg shadow-md mt-30"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={userdata.email}
            onChange={handleInput}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={userdata.password}
            onChange={handleInput}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
