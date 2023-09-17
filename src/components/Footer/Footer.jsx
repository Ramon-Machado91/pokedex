import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(199, 30, 30)",
        color: "white",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        © 2023 Pokémon Company International. Createad by Ramon Machado
      </Typography>
    </Box>
  );
};

export default Footer;
