import { Routes, Route, Navigate } from "react-router";
import "./App.css";
import { Navigator } from "./components/Navigator.jsx";
import { Home, Pokemones, Admin, LogLogin, NotFound, Pokemon } from "./views";
import { PokeProvider } from "./contexts/PokeContext.jsx";
import UserProvider, { UserContext } from "./contexts/UserContext.jsx";
import { useContext } from "react";

function App() {
  const user = useContext(UserContext);
  return (
    <>
      <UserProvider>
        <PokeProvider>
          <Navigator />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones/" element={<Pokemones />} />
            <Route path="/pokemon/:pokemon" element={<Pokemon />} />
            <Route
              path="/admin"
              element={user ? <Admin /> : <Navigate to="/loglogin"></Navigate>}
            />
            <Route path="/loglogin" element={<LogLogin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PokeProvider>
      </UserProvider>
    </>
  );
}

export default App;
