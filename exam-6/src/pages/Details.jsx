import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  const fetchCountryDetails = async () => {
    try {
      const res = await axios.get(`https://restcountries.com/v3.1/name/${id}`);
      setCountry(res.data[0]);
    } catch (error) {
      console.error("Error fetching country details:", error);
    }
  };

  useEffect(() => {
    fetchCountryDetails();
  }, [id]);

  if (!country) {
    return <div className="text-center text-white">Loading...</div>;
  }

  return (
    <div className="p-6 bg-gradient-to-r from-gray-900 via-blue-950 to-black text-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-yellow-400">{country.name.common}</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md border border-white/20">
          <img
            src={country.flags.png}
            alt={country.name.common}
            className="w-full h-60 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold text-cyan-300">Region: {country.region}</h2>
          <p className="text-gray-300">Subregion: {country.subregion}</p>
          <p className="text-gray-300">Capital: {country.capital.join(", ")}</p>
          <p className="text-gray-300">Population: {country.population.toLocaleString()}</p>
          <p className="text-gray-300">Area: {country.area.toLocaleString()} km²</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md border border-white/20">
          <h2 className="text-xl font-semibold text-pink-400">Languages:</h2>
          <p className="text-gray-300">{Object.values(country.languages).join(", ")}</p>

          <h2 className="text-xl font-semibold text-pink-400 mt-4">Currency:</h2>
          <p className="text-gray-300">{Object.values(country.currencies)[0].name}</p>

          <h2 className="text-xl font-semibold text-pink-400 mt-4">Timezones:</h2>
          <p className="text-gray-300">{country.timezones.join(", ")}</p>

          <h2 className="text-xl font-semibold text-pink-400 mt-4">Borders:</h2>
          <p className="text-gray-300">
            {country.borders ? country.borders.join(", ") : "No direct borders"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
