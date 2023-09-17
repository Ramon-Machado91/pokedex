import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Container } from "@mui/material";
import "./profile.css";
import MoveList from "../components/MoveList/MoveList";
import HabilitiesList from "../components/HabilitiesList/HabilitiesList";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Footer from '../components/Footer/Footer' 

const Profile = ({ pokemonData }) => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <>
      <NavBar hideSearch />
      <Container maxWidth="md">
        <div className="pokeCard pokemon-card">
          <button className="back-button" onClick={handleBackToHome}>
            <FiArrowLeft />
          </button>
          <h3>{pokemonData.name}</h3>

          <img
            src={pokemonData.sprites.front_default}
            alt="pokemon"
            width="50%"
            height="50%"
          />
          <h2>Move List</h2>
          <MoveList itens={pokemonData.moves} />

          <h2>Abilities</h2>
          <HabilitiesList itens={pokemonData.abilities} />
        </div>
      </Container>
      <Footer/>
    </>
  );
};

export default Profile;
