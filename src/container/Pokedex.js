import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, CircularProgress, Grid, makeStyles } from "@material-ui/core";
import { IMAGE_API_URL, POKEMON_API_URL } from "./../config/index";
import PokemonCard from "./../components/PokemonCard";
const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    textAlign: "center",
    padding: "70px 10px 0px 10px",
    backgroundColor: "#51087E",
  },
}));
function Pokedex() {
  const classes = useStyles();
  //initially we are keeping the pokemon data to empty array and then while using useEffect i will set the data
  //   const [pokemonData, setPokemonData] = useState([]);
  // when we will load data at that time suppose our data is not loaded so at that time we want to show a rotating circular symbol which will indicate that the data is loading, since in above case we were using array it is a truthy value so our condition will not become false and we won't see the roataing animation and that's the reason we are using a null value instead of an empty array
  const [pokemonData, setPokemonData] = useState(null);
  // useEffect(() => {
  //   fetch(POKEMON_API_URL + "?limit=50").then((response) => {
  //     const da = response.json();
  //     console.log(da);
  //   });
  // }, []);
  useEffect(() => {
    //we kept the main url in the config file and added some query over here to get just the limited data
    axios.get(POKEMON_API_URL + "?limit=204").then((response) => {
      if (response.status >= 200 && response.status < 300) {
        //here we get the output in the response and we have to convert the data in some proper from using .data method (we have destructured the data over here in result variable)
        const { results } = response.data;
        // console.log(results);
        //we are going to store the new data in array
        let newPokemonData = [];
        results.forEach((pokemon, index) => {
          //we want id from 1 so we will increment the index value and it will get stored from 1 instead of 0
          index++;
          let pokemonObject = {
            id: index,
            url: IMAGE_API_URL + index + ".png",
            name: pokemon.name,
          };
          newPokemonData.push(pokemonObject);
          //   console.log("pokemonObject", pokemonObject);
          //   console.log("pokemon", pokemon);
        });
        //here we stored the whole pokemon data into the array
        // console.log(newPokemonData);

        //we had empty array in pokemonData but now we will all the data which we had recieved over here so that I can use in Box Component below
        setPokemonData(newPokemonData);
        //if I want to see the rotating loading animation commennt out above line
      }
    });
  }, []);
  return (
    // <Box>
    //   {pokemonData ? (
    //     <Grid container spacing={2}>
    //       {pokemonData.map((pokemon) => {
    //         return <h1 style={{ marginLeft: 10 }}>{pokemon.name}</h1>;
    //       })}
    //     </Grid>
    //   ) : (
    //     <CircularProgress style={{ marginTop: "100px" }} />
    //   )}
    // </Box>

    <Box>
      {pokemonData ? (
        <Grid className={classes.pokedexContainer} container spacing={2}>
          {pokemonData.map((pokemon) => {
            return (
              <PokemonCard
                pokemon={pokemon}
                image={pokemon.url}
                key={pokemon.id}
              />
            );
          })}
        </Grid>
      ) : (
        <CircularProgress style={{ marginTop: "100px" }} />
      )}
    </Box>
  );
}

export default Pokedex;

//using async await fetch to implement the above logic
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Box, CircularProgress, Grid } from "@material-ui/core";
// import { IMAGE_API_URL, POKEMON_API_URL } from "./../config/index";
// import PokemonCard from "./../components/PokemonCard";
// function Pokedex() {
//   const [pokemonData, setPokemonData] = useState(null);
//   useEffect(() => {
//     const getData = async () => {
//       const resp = await fetch(POKEMON_API_URL + "?limit=80");
//       const data = await resp.json();
//       const res = data.results;
//       console.log(res);
//       let newPokemonData = [];
//       res.forEach((pokemon, index) => {
//         index++;
//         let pokemonObject = {
//           id: index,
//           url: IMAGE_API_URL + index + ".png",
//           name: pokemon.name,
//         };
//         newPokemonData.push(pokemonObject);
//       });
//       setPokemonData(newPokemonData);
//     };
//     getData();
//   }, []);

//   return (
//     <Box>
//       {pokemonData ? (
//         <Grid container spacing={2}>
//           {pokemonData.map((pokemon) => {
//             return <PokemonCard pokemon={pokemon} image={pokemon.url} />;
//           })}
//         </Grid>
//       ) : (
//         <CircularProgress style={{ marginTop: "100px" }} />
//       )}
//     </Box>
//   );
// }

// export default Pokedex;
