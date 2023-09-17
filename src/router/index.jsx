import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import { BrowserRouter } from "react-router-dom/dist";

const Router = () => {

  const[pokemonData, setPokemonData] = useState()
    
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setPokemonData={setPokemonData} />} />
        <Route path="/profile" element={<Profile pokemonData={pokemonData} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
