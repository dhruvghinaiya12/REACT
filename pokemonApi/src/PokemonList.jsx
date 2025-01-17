import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const PokemonList = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState([]); 
  const [pokemon, setPokemon] = useState([]); 

  const fetchAllPokemon = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=151");
      setPokemon(res.data.results); 
    } catch (err) {
      console.error("Error fetching Pokémon data.");
    }
  };

  useEffect(() => {
    fetchAllPokemon();
  }, []);

  const searchpokemon = async () => {
    if (!pokemonName.trim()) {
      setPokemonData([]); 
      return;
    }

    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      setPokemonData([res.data]); 
    } catch (err) {
      setPokemonData([]); 
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Pokemon</h1>

      <div className="mb-3 text-center">
        <input
          type="text"
          className="form-control w-50 mx-auto"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
          placeholder="Enter Pokémon name"
        />
        <button
          onClick={searchpokemon}
          className="btn btn-success mt-2"
        >
          Search Pokemon
        </button>
      </div>

      <div className="row">
        {pokemonData.length > 0 ? (
          <div className="col-md-3 mb-4">
            <div className="card mb-4 text-center">
              <img
                src={pokemonData[0].sprites.front_default}
                alt={pokemonData[0].name}
                className="card-img-top"
              />
              <h2 className="card-title text-capitalize">{pokemonData[0].name}</h2>
            </div>
          </div>
        ) : (
          <>
            {pokemon.map((pokemonItem, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card text-center">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                    alt={pokemonItem.name}
                    className="card-img-top"
                  />
                  <h5 className="card-title text-capitalize">{pokemonItem.name}</h5>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default PokemonList;
