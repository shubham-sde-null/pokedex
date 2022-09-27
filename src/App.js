import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokedex from "./container/Pokedex.js";
import AppNavigator from "./components/AppNavigator";
import PokemonDetail from "./container/PokemonDetail";
function App() {
  return (
    <BrowserRouter>
      <AppNavigator />
      <Routes>
        <Route
          exact
          path="/"
          //  component={Pokedex}
          element={<Pokedex />}
        />
        <Route
          exact
          path="/pokemon/:id"
          // component={PokemonDetail}
          element={<PokemonDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
