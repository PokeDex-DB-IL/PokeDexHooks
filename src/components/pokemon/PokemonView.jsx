/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './PokemonView.css';
import { Link } from 'react-router-dom';

const PokemonView = ({ id, name, image, attack, defense, speed, HP, type1 }) => (
  <figure className={styles.PokemonCard} id={id}>
    <Link key={id} to={`/pokemon/id/${id}`}>
      <img src={image} alt={image}/>
    </Link>
    <figcaption id={type1, speed}>
            Pokemon: {name}, <br/>
            HP:  {HP},   <br/>
            Attack:  {attack}, <br/>
            Defense:  {defense}
    </figcaption>
  </figure>
);

PokemonView.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  attack: PropTypes.number,
  defense: PropTypes.number,
  speed: PropTypes.number,
  HP: PropTypes.number,
  type1: PropTypes.string
};


export default PokemonView;
