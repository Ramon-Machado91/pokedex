import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import ThemeTogglerButton from "../Toggler-Button/Button"; // Importe o seu botão aqui

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          className="navBar"
          sx={{ backgroundColor: "rgb(199, 30, 30)" }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center" // Isso centraliza verticalmente
            width="100%"
          >
            <Box
              component="img"
              src="/assets/pokemon-logo.png"
              height="3em"
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
            <ThemeTogglerButton /> 
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
