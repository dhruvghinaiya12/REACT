import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);

  const FetchData = async () => {
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="p-6 bg-gradient-to-r from-gray-900 via-blue-950 to-black text-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-yellow-400">🌍 All Countries</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((country) => (
          <Link
            key={country.name.common}
            to={`/details/${country.name.common}`}
            className="bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition transform duration-300 border border-white/20"
          >
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-3 text-cyan-300">{country.name.common}</h2>
            <p className="text-gray-300">🌍 Region: {country.region}</p>
            <p className="text-gray-300">👥 Population: {country.population.toLocaleString()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
