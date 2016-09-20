import * as ReactDOM from "react-dom";
import * as React from "react";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

import { PokemonIndex } from "./components/pokemon_index.jsx";
import { Content } from "./components/content.jsx";
import { PokemonDetails } from "./components/pokemon_details";
import { PokemonForm } from "./components/pokemon_form";

const AppRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={Content} >
      <Route path="pokemon/:id" component={PokemonDetails}/>
      <Route path="new" component={PokemonForm} />
    </Route>
  </Router>
)

$(()=>{
  ReactDOM.render(AppRouter, $('#root')[0]);
});
