import React from "react";
import { Image } from "react-bootstrap";

const pikaPika =
  "https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png";

const Home = () => {
  return (
    <div style={{ marginTop: "8rem", display: "grid", placeItems: "center" }}>
      <h1>Bienvenido maestro PokeMón</h1>
      <Image
        src={pikaPika}
        alt="Pikachu"
        style={{ height: "30rem", objectFit: "cover" }}
      />
    </div>
  );
};

export default Home;
