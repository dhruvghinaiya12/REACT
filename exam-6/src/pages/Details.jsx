import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
  const { countryName } = useParams(); 
  const [country, setCountry] = useState();

  const fetchCountryDetails = async (countryName) => {
    try {
      const res = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
      setCountry(res.data[0]); 
    } catch (error) {
      console.error("Error fetching country details:", error);
    }
  };

  useEffect(() => {
    fetchCountryDetails(countryName);
  }, [countryName]);

  if (!country) {
    return <div className="text-center text-white">Loading...</div>; 
  }

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">{country.name.common}</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <img
            src={country.flags.png}
            alt="img"
            className="w-full h-60 object-cover rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold">Region: {country.region}</h2>
          <p className="text-gray-400">Subregion: {country.subregion}</p>
          <p className="text-gray-400">Capital: {country.capital.join(", ")}</p>
          <p className="text-gray-400">Population: {country.population.toLocaleString()}</p>
          <p className="text-gray-400">Area: {country.area.toLocaleString()} km²</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Languages:</h2>
          <p className="text-gray-400">{Object.values(country.languages).join(", ")}</p>

          <h2 className="text-xl font-semibold mt-4">Currency:</h2>
          <p className="text-gray-400">{Object.values(country.currencies)[0].name}</p>

          <h2 className="text-xl font-semibold mt-4">Timezones:</h2>
          <p className="text-gray-400">{country.timezones.join(", ")}</p>

          <h2 className="text-xl font-semibold mt-4">Borders:</h2>
          <p className="text-gray-400">
            {country.borders ? country.borders.join(", ") : "No direct borders"}
          </p>
        </div>
      </div>

      <div className="bg-gray-800 p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">More Details:</h2>
        <p className="text-gray-400">Independent: {country.independent ? "Yes" : "No"}</p>
        <p className="text-gray-400">Demonym: {country.demonyms.eng.m || "Not available"}</p>
        <p className="text-gray-400">Capital Info (Latitude/Longitude): {country.capitalInfo.latlng.join(", ")}</p>
        <p className="text-gray-400">Flag: {country.flag}</p>
        <p className="text-gray-400">Maps: <a href={country.maps.googleMaps} className="text-blue-400">Google Maps</a> | <a href={country.maps.openStreetMaps} className="text-blue-400">OpenStreetMap</a></p>
      </div>
    </div>
  );
};

export default Details;
