import React from "react";
import { connect } from "react-redux";
import { Box, Grid, makeStyles } from "@material-ui/core";
import PokemonCard from "../components/PokemonCard";
const useStyles = makeStyles((theme) => ({
  pokedexCont: {
    height: "100vh",
    backgroundColor: "black",
    marginTop: "75px",
    textAlign: "center",
    borderRadius: "5px",
    paddingTop: "30px",
    // border: "2px solid red",
  },
}));
function Faourites(props) {
  const classes = useStyles();
  return (
    <Box>
      <Grid container spacing={2} className={classes.pokedexCont}>
        {props.favourites.map((pokemon) => {
          return (
            <PokemonCard
              pokemon={pokemon}
              key={pokemon.id}
              image={pokemon.sprites.front_default}
            />
          );
        })}
      </Grid>
    </Box>
  );
}

const mapStateToProps = (state) => ({
  favourites: state.favourites,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Faourites);
