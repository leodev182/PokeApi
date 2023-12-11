import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import pokeballSvg from "../assets/images/pokebola.png";

export const Navigator = () => {
  const setActiveClass = ({ isActive }) =>
    isActive ? "active" : "linkDefoult";
  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        style={{ border: "1px dashed white" }}
      >
        <Container>
          <Navbar.Brand>PokeApi</Navbar.Brand>
          <Image
            src={pokeballSvg}
            alt="Pokebola"
            style={{ width: "30px", height: "30px" }}
          />
          <Nav className="me-auto">
            <NavLink className={setActiveClass} to="/">
              Home
            </NavLink>
            <NavLink className={setActiveClass} to="/pokemones">
              Pokemones
            </NavLink>
            <NavLink className={setActiveClass} to="/admin">
              PoKeAventuras
            </NavLink>
          </Nav>
          <NavLink className={setActiveClass} to="/loglogin">
            Log/LogIn
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
};
