import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Container } from "@mui/material";
import "./profile.css";
import MoveList from "../components/MoveList/MoveList";
import HabilitiesList from "../components/HabilitiesList/HabilitiesList";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Footer from '../components/Footer/Footer' 
import { ThemeContext, themes } from "../Contexts/Theme-context";

const Profile = ({ pokemonData }) => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState(themes.light);

  useEffect(() => {
    setLocalTheme(theme);
  }, [theme]);

  const handleBackToHome = () => {
    navigate("/");
  };

  const profileStyles = {
    backgroundColor: localTheme === themes.light ? "#ffff00" : "#333333",
    color: localTheme === themes.light ? "#000000" : "#ffffff",
    borderRadius: "15px",
    padding: "20px",
    margin: "20px",
    transition: "background-color 0.3s ease-in-out",
  };

  const pageStyles = {
    backgroundColor: localTheme === themes.light ? "#0000ff" : "#4f4b4b", // Cor de fundo azul para tema light e cinza escuro para tema dark
    minHeight: "100vh", // Define a altura mínima para cobrir a tela inteira
  };

  return (
    <div style={pageStyles}> {/* Aplica o estilo de fundo à div envolvente */}
      <NavBar hideSearch />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "calc(100vh - 150px)" }}>
        <Container maxWidth="md" style={profileStyles}>
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
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
