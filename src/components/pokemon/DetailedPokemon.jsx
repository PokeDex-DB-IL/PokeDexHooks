/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const DetailedPokemon = ({ id, name, height, weight, experience, type1, type2, attack, defense, hp, speed, hidden_ability, image, ability1, ability2 }) => {
  const history  = useHistory();
  
  const handleClick = () => {
    history.goBack(1);
  };

  return (
    <>
      <h2 id={id}>{name}</h2>
      <img src={image} alt={image}/>
      <h5>Height: {height} Weight: {weight}</h5>
      <p>{name} has a base experience of {experience} and starting HP of {hp}. {name} is a {type1} {type2 !== 'NA' && <> and {type2}</>} type of Pokemon with an attack of {attack}, defense of {defense}, and speed of {speed}. {name} has {ability1} {ability2 !== 'NA' && <> and {ability2}</>} to help deal with opponents. {hidden_ability !== 'NA' && <> {name}&apos;s secret ability is called {hidden_ability}. </> } </p>
      <button onClick={handleClick}>Go Back?</button>
    </>
  );
};

DetailedPokemon.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  height: PropTypes.number,
  weight: PropTypes.number,
  type1: PropTypes.string,
  type2: PropTypes.string,
  experience: PropTypes.number, 
  attack: PropTypes.number,
  defense: PropTypes.number,
  hp: PropTypes.number,
  speed: PropTypes.number,
  hidden_ability: PropTypes.string,
  image: PropTypes.string,
  ability1: PropTypes.string,
  ability2: PropTypes.string
};

export default DetailedPokemon;
