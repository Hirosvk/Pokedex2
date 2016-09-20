import * as ReactDOM from "react-dom";
import * as React from "react";
import { PokemonActions } from "./actions/pokemon_actions.js";
import { PokemonStore } from "./stores/pokemon_store.js";
import { PokemonIndex } from "./components/pokemon_index.jsx";

window.log = function(data){
  console.log(data);
}

window.PokemonActions = PokemonActions;
window.PokemonStore = PokemonStore;

$(()=>{
  ReactDOM.render(<PokemonIndex/>, $('#root')[0]);
});
