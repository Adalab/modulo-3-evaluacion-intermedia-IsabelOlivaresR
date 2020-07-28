import React from 'react';
import PokeList from './PokeList';
import PokemonsFromApi from '../data/pokemonList.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: PokemonsFromApi,
    };
  }

  render() {
    return (
      <div>
        <PokeList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
