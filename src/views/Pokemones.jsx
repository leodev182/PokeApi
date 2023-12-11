import Image from "react-bootstrap/Image";
import pikaChu from "../assets/images/pika.png";
import Sq from "../assets/images/sq.png";
import { usePokeContext } from "../contexts/PokeContext";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  const { pokemon, setPokemon, pokemonData, loading } = usePokeContext();
  const navigate = useNavigate();

  if (loading) {
    return <p>Cargando...</p>;
  }

  const handleGoToCharacter = () => {
    navigate(`/pokemon/${pokemon}`);
    console.table(pokemon);
  };
  return (
    <div className="home">
      <div className="land"></div>
      <div className="contenedor">
        <div>
          <Image
            src={pikaChu}
            alt="Pikachu"
            style={{ height: "35rem", objectFit: "cover" }}
          />
        </div>
        <div className="select">
          <select
            className="customSelect"
            size="5"
            onChange={(e) => setPokemon(e.target.value)}
          >
            {pokemonData
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((pokemon) => (
                <option key={pokemon.name} value={pokemon.name}>
                  {pokemon.name}
                </option>
              ))}
          </select>
          <div>
            <Button
              variant="warning"
              onClick={handleGoToCharacter}
              style={{ marginTop: "15px" }}
            >
              Ver Detalle
            </Button>
          </div>
        </div>
        <div>
          <Image
            src={Sq}
            alt="Squirtle"
            style={{ height: "35rem", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Pokemones;
