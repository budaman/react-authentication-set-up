import React from "react";
import CelebrityJokes from "./CelebrityJokes";
import FoodJokes from "./FoodJokes";
import { Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={FoodJokes} />
        <Route path="/special" component={CelebrityJokes} />
      </Switch>
    </div>
  );
};

export default App;
