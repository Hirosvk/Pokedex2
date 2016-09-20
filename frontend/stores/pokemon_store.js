import { AppDispatcher } from "../dispatcher/dispatcher";
import { PokemonConstants } from "../constants/pokemon_constants";
import { Store } from "flux/utils";

const PokemonStore = new Store(AppDispatcher);

let _pokemons = [];

PokemonStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case PokemonConstants.RECEIVE_ALL_POKEMONS:
      _pokemons = payload.pokemons;
      this.__emitChange();
      break;
  }
}

PokemonStore.allPokemons = function(){
  return _pokemons;
}

export { PokemonStore };
