import "./App.css";
import AllPlayers from "./components/AllPlayers.jsx";
import fetchAllPuppies from "./API";
import SinglePlayer from "./components/SinglePlayer";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Searchbar from "./components/Searchbar";

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

// import { useState, useEffect } from "react";
// import "./App.css";
// import AllPlayers from "./components/AllPlayers";
// import NavBar from "./components/NavBar";
// import NewPlayerForm from "./components/NewPlayerForm";
// import SinglePlayer from "./components/SinglePlayer";
// import SearchBar from "./components/SearchBar";
// import { Routes, Route } from "react-router-dom";

// export default function App() {
//   return (
//     <section>
//       <div id="container">
//         <NavBar />
//         {/* <AllPlayers /> */}
//         {/* <NewPlayerForm /> */}
//         {/* <SinglePlayer /> */}
//         <SearchBar />
//       </div>
//       <div id="route-div">
//         <Routes>
//           <Route path="/" element={<AllPlayers />}></Route>
//           <Route path="/players/:id" element={<SinglePlayer />} />
//           <Route path="/newplayerform" element={<NewPlayerForm />}></Route>
//         </Routes>
//       </div>
//     </section>
//   );
// }
