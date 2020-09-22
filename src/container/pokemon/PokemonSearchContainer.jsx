/* eslint-disable max-len */
import React, { useState } from 'react';
import PokemonListView from '../../components/pokemon/PokemonListView';
import { usePokemonNameHook } from '../../hooks/pokemon/PokemonNameHook';
import styles from './PokemonSearchContainer.css';


const PokemonSearchContainer = () => {
  const [searchedPokemon, setSearchedPokemon] = useState('');
  const { pokemonByName, currentPage, totalPages, handleClick } = usePokemonNameHook(searchedPokemon);

  const oneOrMorePokemon = searchedPokemon.length > 0;

  return (
    <div className={styles.Search}>
      <section className={styles.Pokemon}>
        <input type="text" placeholder="Search Pokemon Name" value={searchedPokemon} name="searchedPokemon" onChange={({ target }) => setSearchedPokemon(target.value)} />
        <button disabled={currentPage === 1 || !oneOrMorePokemon} name="previous" onClick={handleClick}>&lt;</button>
        {oneOrMorePokemon && currentPage} {oneOrMorePokemon && <> / </>}  {oneOrMorePokemon && totalPages}
        <button disabled={currentPage === totalPages || !oneOrMorePokemon}  name="next" onClick={handleClick}>&gt;</button>
      </section>
      {searchedPokemon && <PokemonListView pokemon={pokemonByName}/>}
    </div>
  );
};

export default PokemonSearchContainer;
