import { TOGGLE_FAVOURITE } from "./action";
const initialState = {
  favourites: [],
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      let pokemon = action.payload;
      let pokemonFromFavourite = state.favourites.find(function (favPokemon) {
        return favPokemon.id === pokemon.id;
      });
      return {
        ...state,
        favourites: pokemonFromFavourite
          ? [
              ...state.favourites.filter(
                (pokemon) => pokemon.id !== pokemonFromFavourite.id
              ),
            ]
          : [...state.favourites, action.payload],
      };
    default:
      return state;
  }
};
export default pokemonReducer;
