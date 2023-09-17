import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import {Container,Grid,Button,Select,MenuItem,CircularProgress} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./home.css";

const Home = ({ setPokemonData }) => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const ITEMS_PER_PAGE = 12;

  const getAllPokemonTypes = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/type/");
      const typesData = response.data.results.map((type) => type.name);
      setTypes(typesData);
    } catch (error) {
      console.error("Erro ao buscar tipos de Pokémon:", error);
    }
  };

  useEffect(() => {
    getAllPokemonTypes();
    getPokemons();
  }, [page]);

  const getPokemons = () => {
    var endPoints = [];
    const offset = (page - 1) * ITEMS_PER_PAGE;

    for (var i = offset + 1; i <= offset + ITEMS_PER_PAGE; i++) {
      endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    setIsLoading(true);
    axios.all(endPoints.map((endpoint) => axios.get(endpoint))).then((res) => {
      const newPokemons = res.map((pokemon) => pokemon.data);
      setPokemons(newPokemons);
      setIsLoading(false);
    });
  };

  const loadMorePokemons = () => {
    setPage(page + 1);
  };

  const filterPokemonsByType = async () => {
    if (selectedType === "") {
      setPage(1);
      setPokemons([]);
    } else {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/type/${selectedType}`
        );

        const pokemonUrls = response.data.pokemon.map(
          (entry) => entry.pokemon.url
        );

        const promises = pokemonUrls.map(async (url) => {
          const res = await axios.get(url);
          return res.data;
        });

        setIsLoading(true);
        const filtered = await Promise.all(promises);
        setPokemons(filtered);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao filtrar os pokémons por tipo:", error);
      }
    }
  };

  const handleSearchChange = (event) => {
    if (event.target && event.target.value !== undefined) {
      setSearchTerm(event.target.value.toLowerCase());
    }
  };

  const filteredPokemons = pokemons.filter((pokemon) => {
    return pokemon.name.includes(searchTerm);
  });

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSearchClick = () => {
    filterPokemonsByType();
  };

  const pokemonPickHandler = (pokemonData) => {
    setPokemonData(pokemonData);
    navigate("/profile");
  };

  return (
    <div>
      <NavBar
        pokemonFilter={filterPokemonsByType}
        handleSearchChange={handleSearchChange}
      />

      <Container maxWidth="false" className="all-page">
        <Select
          value={selectedType}
          onChange={handleTypeChange}
          style={{ marginBottom: "20px", backgroundColor: "white" }}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Busque seu Pokémon
          </MenuItem>
          <MenuItem value="">Todos</MenuItem>
          {types.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>

        <Button
          variant="contained"
          onClick={handleSearchClick}
          style={{
            marginBottom: "20px",
            marginLeft: "10px",
            backgroundColor: "rgb(199, 30, 30)",
          }}
        >
          Buscar seu Pokemon pelo tipo
        </Button>

        <Grid container>
          {isLoading ? (
            <CircularProgress sx={{ marginLeft: "50%", marginTop: "20px" }} />
          ) : (
            filteredPokemons.map((pokemon, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <div onClick={() => pokemonPickHandler(pokemon)}>
                  <PokemonCard
                    name={pokemon.name}
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    types={pokemon.types}
                  />
                </div>
              </Grid>
            ))
          )}
        </Grid>

        <div style={{ textAlign: "center", margin: "20px" }}>
          <Button
            style={{ backgroundColor: "rgb(199, 30, 30)" }}
            variant="contained"
            onClick={loadMorePokemons}
          >
            Carregar +12 Pokémons
          </Button>
        </div>
      </Container>

      <Footer className="pokemon-footer" />
    </div>
  );
};

export default Home;
