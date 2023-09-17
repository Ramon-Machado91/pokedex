import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function PokemonCard({ name, image, types }) {
  const pokemonType = () => {
    if (types && types.length > 0) {
      if (types.length === 1) {
        return `Type: ${types[0].type.name}`;
      } else {
        return `Types: ${types[0].type.name} | ${types[1].type.name}`;
      }
    }
    return "Type: Unknown";
  };

  return (
    <Card
      className="cardPokemon"
      sx={{
        maxWidth: 345,
        margin: "1em",
        backgroundColor: "rgb(246, 235, 26)",
        cursor: "pointer",
        borderRadius: "15px",
      }}
    >
      <CardMedia sx={{height: 250 }} image={image} title="pokemon-image" />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="caption" component="div">
            {pokemonType()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
