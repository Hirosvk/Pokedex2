import * as React from "react";
import { PokemonStore } from "../stores/pokemon_store";
import { PokemonActions } from "../actions/pokemon_actions";
import { PokemonIndexItem } from "./pokemon_index_item";

export const PokemonIndex = React.createClass({
  getInitialState(){
    return {pokemons: PokemonStore.allPokemons()}
  },

  componentDidMount(){
    PokemonStore.addListener(this.updatePokemons);
    PokemonActions.fetchAllPokemons();
  },

  updatePokemons(){
    this.setState({pokemons: PokemonStore.allPokemons()});
  },

  render(){
    // return (<ul>
    //   {this.state.pokemons.map((pokemon)=> {
    //     return <PokemonIndexItem pokemon={pokemon} key={pokemon.id}/>;
    //   })}
    // </ul>);
    return React.createElement('ul',{className: "pokemon-index"}, this.state.pokemons.map(pokemon => {
      return React.createElement(PokemonIndexItem, {
        key: pokemon.id,
        pokemon: pokemon
      });
    }))
  }


});
