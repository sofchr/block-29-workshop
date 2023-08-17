import { useState } from "react";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import NavBar from "./components/NavBar";
import NewPlayerForm from "./components/NewPlayerForm";
import SinglePlayer from "./components/SinglePlayer";
import SearchBar from "./components/SearchBar";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <section>
      <div id="container">
        <NavBar />
        {/* <AllPlayers /> */}
        {/* <NewPlayerForm /> */}
        {/* <SinglePlayer /> */}
        <SearchBar />
      </div>
      <div id="route-div">
        <Routes>
          <Route path="/" element={<AllPlayers />}></Route>
          <Route path="/players/:id" element={<SinglePlayer />} />
          <Route path="/newplayerform" element={<NewPlayerForm />}></Route>
        </Routes>
      </div>
    </section>
  );
}
