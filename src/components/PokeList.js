import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  const items = props.pokemons.map((pokemon, index) => {
    return (
      <li className='pokemon_card ' key={index}>
        <Pokemon icon={pokemon.url} name={pokemon.name} types={pokemon.types} />
      </li>
    );
  });

  return <ul className='cards'>{items}</ul>;
};

/*class PokeList extends React.Component {
  render() {
    const items = props.pokemons.map((pokemon, index) => {
      return (
        <li className='pokemon_card ' key={index}>
          <Pokemon
            icon={pokemon.url}
            name={pokemon.name}
            types={pokemon.types}
          />
        </li>
      );
    });

    return <ul className='cards'>{items}</ul>;
  }
}*/

export default PokeList;
