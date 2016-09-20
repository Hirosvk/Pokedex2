import { AppDispatcher } from "../dispatcher/dispatcher.js";
import { PokemonConstants } from "../constants/pokemon_constants.js";
import { Store } from "flux/utils";

export const SinglePokemonStore = new Store(AppDispatcher);

let _pokemon = {};

SinglePokemonStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case PokemonConstants.RECEIVE_SINGLE_POKEMON:
      _pokemon = payload.pokemon;
      this.__emitChange();
      break;
  }
}

SinglePokemonStore.getPokemon = function(){
  return _pokemon;
}
window.SinglePokemonStore = SinglePokemonStore;
