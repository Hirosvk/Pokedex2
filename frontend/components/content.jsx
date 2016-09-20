import * as React from "react";
import { PokemonIndex } from "./pokemon_index";

export const Content = React.createClass({
  render(){
    return (
      <div className="content">
        <PokemonIndex/>
        {this.props.children}
      </div>
    )
  }
});
