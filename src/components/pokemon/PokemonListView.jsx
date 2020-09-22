import React from 'react';
import PropTypes from 'prop-types';
import PokemonView from './PokemonView';
import styles from './PokemonViewList.css';


// eslint-disable-next-line react/prop-types
const PokemonListView = ({ pokemon }) => {
  const pokemonElements = pokemon.map(poke => (
    // eslint-disable-next-line max-len
    <li key={poke.id}>
      <PokemonView  { ...poke} />
    </li>
  
  ));
  return (
    <ul className={styles.List}>
      {pokemonElements}     
    </ul>
  );
};

PokemonListView.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    attack: PropTypes.number,
    defense: PropTypes.number,
    speed: PropTypes.number,
    HP: PropTypes.number,
    type1: PropTypes.string
  }))
};

export default PokemonListView;
