import * as React from "react";

export const PokemonIndexItem = React.createClass({
  getInitialState(){
    return {showImage: false};
  },
  propTypes: {
    pokemon: React.PropTypes.shape({
      name: React.PropTypes.string
    })
  },

  imageAppear(){
    this.setState({
      showImage: true
    });
  },

  imageDisapper(){
    this.setState({
      showImage: false
    });
  },

  displayStatus(){
    return this.state.showImage ? "show" : "hide";
  },

  render(){
    return (
      <li onMouseEnter={this.imageAppear}
          onMouseLeave={this.imageDisapper}
          className="pokemon-index-item">
        <a href={`#/pokemon/${this.props.pokemon.id}`}>
          <h2 className="pokemon-name">
            {this.props.pokemon.name}
          </h2>
          <img src={this.props.pokemon.image_url} className="pokemon-image"/>
          <ul className={`pokemon-info ${this.displayStatus()}`}>
            <li>type: {this.props.pokemon.poke_type}</li>
            <li>attack: {this.props.pokemon.attack}</li>
            <li>defense: {this.props.pokemon.defense}</li>
            <li>moves: {
                this.props.pokemon.moves.replace(/\[|\]|"/g, "")
              }</li>
          </ul>
        </a>
      </li>
    );
  }
});
