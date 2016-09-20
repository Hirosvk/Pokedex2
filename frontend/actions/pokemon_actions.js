import { ApiUtils } from "../utils/api_utils";
import { PokemonConstants } from "../constants/pokemon_constants";
import { AppDispatcher } from "../dispatcher/dispatcher";

export const PokemonActions = {
  fetchAllPokemons(){
    ApiUtils.fetchAllPokemons(this.receiveAllPokemons);
  },

  receiveAllPokemons(pokemons){
    AppDispatcher.dispatch({
      actionType: PokemonConstants.RECEIVE_ALL_POKEMONS,
      pokemons: pokemons
    });
  }
}
