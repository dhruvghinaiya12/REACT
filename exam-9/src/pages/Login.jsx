import React, { useState } from "react";
import Cookies from "js-cookie";
import { googleauth, login } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleGoogleLogin = async () => {
    try {
      let userdata = await googleauth();
      console.log("User logged in with Google:", userdata);      
      Cookies.set("email", userdata.user.email);
      Cookies.set("userToken", userdata.user.accessToken);
      Cookies.set("isLogin", "true");
      alert("Login Successful");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Google login failed. Please try again.");
    }
  };

  const handleLogin = async () => {
    try {
      let userData = await login(data.email, data.password);
      console.log("User logged in:", userData);
      Cookies.set("email", userData.user.email);
      Cookies.set("userToken", userData.user.accessToken);
      Cookies.set("isLogin", "true");
      alert("Login Successful");
    } catch (error) {
      console.log(error);
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    setData({ email: "", password: "" });
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <div className="p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            value={data.email}
            onChange={handleInput}
            className="mb-4 p-3 rounded border border-gray-400 outline-none"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={data.password}
            onChange={handleInput}
            className="mb-4 p-3 rounded border border-gray-400 outline-none"
            required
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded">
            Login
          </button>
        </form>

        <div className="text-center my-4 text-gray-500">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full p-3 border border-gray-400 rounded text-gray-700 hover:bg-gray-200 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google Logo"
            className="w-6 h-6 mr-2"
          />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
