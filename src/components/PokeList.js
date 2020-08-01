import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => {
  const items = props.pokemons.map((pokemon, id) => {
    return (
      <li className='pokemon_card2 ' key={pokemon.id}>
        <Pokemon url={pokemon.url} name={pokemon.name} types={pokemon.types} />
      </li>
    );
  });
  return (
    <div>
      <h1 className='page_title'>Mi lista de Pokemon</h1>
      <ul className='cards'>{items}</ul>;
    </div>
  );
};
export default PokeList;
