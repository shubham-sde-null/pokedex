import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokedex from "./container/Pokedex.js";
import AppNavigator from "./components/AppNavigator";
import PokemonDetail from "./container/PokemonDetail";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Faourites from "./container/Faourites.js";
function App() {
  return (
    <Provider store={store}>
      {/* here persistgate is used to store our data when we go offline such that when we come back online we will still see the data which we have saved */}
      <PersistGate loading={null} persistor={persistor}>
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
            <Route
              exact
              path="/favourites"
              //  component={Pokedex}
              element={<Faourites />}
            />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
