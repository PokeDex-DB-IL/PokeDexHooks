/* eslint-disable react/jsx-key */
/* eslint-disable max-len */
import React, { useState } from 'react';
import PokemonListView from '../../components/pokemon/PokemonListView.jsx';
import { useGetPokemonTypeHook } from '../../hooks/pokemon/getByTypeHook.jsx';
import { useTypeHook } from '../../hooks/pokemon/TypeHook.jsx';
import styles from './SelectorContainer.css';

const SelectorContainer = () => {
  const [typeOfPokemon, setTypeOfPokemon] = useState([]);
  const { allPokeTypes } = useTypeHook();
  const {  sortedPokemon, currentPage, totalPages, handleClick } = useGetPokemonTypeHook(typeOfPokemon);
  
  const handleChange = (e) => {
    setTypeOfPokemon({ filter: e.target.value });
  };

  const oneOrMorePokemon = sortedPokemon.length > 0;
  
  return (
    <div className={styles.Sort}>
      <select onChange={handleChange}>
        <option value="">Sort by...</option>
        {
          allPokeTypes
            .map(
              eachTypeOfPokemon => 
                <option key={eachTypeOfPokemon} value={eachTypeOfPokemon}>{eachTypeOfPokemon.charAt(0).toUpperCase() + eachTypeOfPokemon.slice(1)}</option>
            )
        }
      </select>
      <section className={styles.Pokemon}>
        <button disabled={currentPage === 1 || !oneOrMorePokemon} name="previous" onClick={handleClick}>&lt;</button>
        {oneOrMorePokemon && currentPage } {oneOrMorePokemon && <> / </>} {oneOrMorePokemon && totalPages}
        <button disabled={currentPage === totalPages || !oneOrMorePokemon} name="next" onClick={handleClick}>&gt;</button>
      </section>
      {sortedPokemon &&  <PokemonListView pokemon={sortedPokemon}/> }
    </div>
  );
};

export default SelectorContainer;
