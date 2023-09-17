import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { ThemeContext } from "../../Contexts/Theme-context";

export default function PokemonCard({ name, image, types }) {
  const { theme } = useContext(ThemeContext);

  const cardStyles = {
    maxWidth: 345,
    margin: "1em",
    backgroundColor: theme.cardBackground,
    cursor: "pointer",
    borderRadius: "15px",
  };

  const textColor = {
    color: theme.text,
  };

  return (
    <Card className="cardPokemon" sx={cardStyles}>
      <CardMedia sx={{ height: 250 }} image={image} title={name} />
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography gutterBottom variant="h5" component="div" sx={textColor}>
            {name}
          </Typography>
          <Typography
            gutterBottom
            variant="caption"
            component="div"
            sx={textColor}
          >
            {types && types.length > 0
              ? types.length === 1
                ? `Type: ${types[0].type.name}`
                : `Types: ${types[0].type.name} | ${types[1].type.name}`
              : "Type: Unknown"}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
