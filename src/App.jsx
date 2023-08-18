import "./App.css";
import AllPlayers from "./components/AllPlayers.jsx";
import fetchAllPuppies from "./API";
import SinglePlayer from "./components/SinglePlayer";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Searchbar from "./components/SearchBar";
// import NewPlayerForm from "./components/NewPlayerForm";

function App() {
  const [players, setPlayers] = useState([]);

  async function makePlayersUseful() {
    let puppyArray = await fetchAllPuppies();
    setPlayers(puppyArray);
  }

  useEffect(() => {
    makePlayersUseful();
  }, []);

  return (
    <>
      <div id="Searchbar">
        <Searchbar />
      </div>
      <div>
        <NavBar id="navBar" />
      </div>

      <div id="routeDiv">
        <Routes>
          <Route path="/" element={<AllPlayers players={players} />} />
          <Route
            path="/players/:playerId"
            element={<SinglePlayer players={players} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
