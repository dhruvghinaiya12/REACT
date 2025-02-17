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
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">🌍 All Countries</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((country, index) => (
          <Link
            key={index}
            to={`/details/${country.name.common.toLowerCase()}`}  
            className="bg-gray-800 p-4 rounded-lg shadow-md"
          >
            <img
              src={country.flags.png}
              alt={country.name.common}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-3">{country.name.common}</h2>
            <p className="text-gray-400">Region: {country.region}</p>
            <p className="text-gray-400">Population: {country.population.toLocaleString()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
