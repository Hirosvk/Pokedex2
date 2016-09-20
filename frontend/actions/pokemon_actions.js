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
  },

  fetchSinglePokemon(pokemon_id){
    ApiUtils.fetchSinglePokemon(pokemon_id, this.receiveSinglePokemon);
  },

  receiveSinglePokemon(pokemon){
    AppDispatcher.dispatch({
      actionType: PokemonConstants.RECEIVE_SINGLE_POKEMON,
      pokemon: pokemon
    })
  },

  createPokemon(pokemon, successCallback){
    ApiUtils.createPokemon(pokemon, successCallback);
  },

  sendFile(file, successCallback){
    ApiUtils.sendFile(file, successCallback);
  },

  returnId(pokemon){
    return pokemon.id;
  }
}
