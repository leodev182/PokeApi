import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const PokeContext = createContext();

//Este es un customHoook para el uso del contexto
export const usePokeContext = () => useContext(PokeContext);

export const PokeProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemon, setPokemon] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        setPokemonData(response.data.results);
        setLoading(false);
        console.table(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <PokeContext.Provider value={{ pokemon, setPokemon, pokemonData, loading }}>
      {children}
    </PokeContext.Provider>
  );
};

export default PokeContext;
