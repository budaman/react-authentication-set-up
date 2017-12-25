import React from "react";
import CelebrityJokes from "./CelebrityJokes";
import FoodJokes from "./FoodJokes";
import { BrowserRouter, Route, Router } from "react-router-dom";
const App = () => {
  return (
    <div className="container">
      <FoodJokes />
    </div>
  );
};

export default App;
