import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokedex from "./container/Pokedex.js";
import AppNavigator from "./components/AppNavigator";
function App() {
  return (
    <BrowserRouter>
      <AppNavigator />
      <Routes>
        <Route path="/" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
