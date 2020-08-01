import React from 'react';
import PokeList from './PokeList';
import pokemonList from '../data/pokemonList.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: pokemonList,
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
