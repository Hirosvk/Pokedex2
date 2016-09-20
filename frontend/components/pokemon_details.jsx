import * as React from "react";
import { PokemonActions } from "../actions/pokemon_actions";
import { SinglePokemonStore } from "../stores/single_pokemon_store";

export const PokemonDetails = React.createClass({
  getInitialState(){
    return {pokemon: SinglePokemonStore.getPokemon()};
  },

  updatePokemon(){
    this.setState({pokemon: SinglePokemonStore.getPokemon()})
  },

  componentWillReceiveProps(newProps){
    PokemonActions.fetchSinglePokemon(newProps.params.id);
  },

  componentDidMount(){
    this.listener = SinglePokemonStore.addListener(this.updatePokemon);
    PokemonActions.fetchSinglePokemon(this.props.params.id);
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  render(){
    return (
      <div className="pokemon-details">
        {this.state.pokemon.name}
      </div>
    )
  }

});
