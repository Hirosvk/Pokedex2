import * as React from "react";
import { PokemonActions } from "../actions/pokemon_actions";

export const PokemonForm = React.createClass({

  submit(event){
    event.preventDefault();
    let pokemon_data = {
      name: event.target.name.value,
      poke_type: event.target.poke_type.value,
      attack: event.target.attack.value,
      defense: event.target.attack.value,
      moves: event.target.moves.value.split(",").map(move => move.replace(/^\s|\s$/g, ""))
    }
    // pokemon_data["picture"] = event.target.picture.files[0];
    debugger;
    // PokemonActions.createPokemon(pokemon_data, this.redirectToNewPokemon);
    PokemonActions.sendFile(event.target.picture.files[0], this.redirectToNewPokemon);
  },

  redirectToNewPokemon(pokemon){
    debugger;
    hashHistory.push(`pokemon/${pokemon.id}`);
  },

  render(){
    return (
      <form onSubmit={this.submit}>
        <label>Name<input type="text" name="name"/></label>
        <label>Type<select name="poke_type">
          {window.pokemonTypes.pokemonTypes.map(poke_type => {
            return <option key={poke_type}
                    value={poke_type}>{poke_type}</option>
          })}
        </select></label>
        <label>Attack<input type="number" min="0" max="100" name="attack"/></label>
        <label>Defence<input type="number" min="0" max="100" name="defence"/></label>
        <label>Moves<input type="text" name="moves"/></label>
        <input type="file" name="picture"/>
        <input type="submit" value="Create!"/>
      </form>
    )
  }
});
