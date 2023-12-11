import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import { useParams } from "react-router-dom";
import { usePokeContext } from "../contexts/PokeContext";

const Pokemon = () => {
  const { pokemonData, loading } = usePokeContext();
  const { pokemon } = useParams();

  const [selectedPokemon, setSelectedPokemon] = useState([]);

  useEffect(() => {
    if (!loading) {
      const foundPokemon = pokemonData.find(
        (poke) => poke.name.toLowerCase() === pokemon.toLowerCase()
      );

      fetch(foundPokemon.url)
        .then((response) => response.json())
        .then((data) => {
          setSelectedPokemon(data);
          // console.log(data);
        })
        .catch((error) =>
          console.error("Error fetching Pokemon details:", error)
        );
    }
  }, [pokemon, pokemonData, loading]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!selectedPokemon) {
    return <p>No se encontró el Pokémon</p>;
  }

  //   console.log(selectedPokemon);
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "40rem",
          width: "auto",
          marginTop: "80px",
          padding: "15px",
          display: "flex",
          border: "1px solid black",
          borderRadius: "10px",
        }}
      >
        <div>
          {selectedPokemon.sprites && selectedPokemon.sprites.other && (
            <Image
              src={selectedPokemon.sprites.other.dream_world.front_default}
              alt={selectedPokemon.name}
              style={{
                height: "90%",
                width: "100%",
                objectFit: "cover",
                marginTop: "2rem",
              }}
            />
          )}
        </div>
        <div style={{ marginTop: "15rem" }}>
          <h2>{selectedPokemon.name}</h2>
          <h4>Estadísticas:</h4>
          <ul>
            {selectedPokemon.stats &&
              selectedPokemon.stats.map &&
              selectedPokemon.stats.map((stat) => (
                <li key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
