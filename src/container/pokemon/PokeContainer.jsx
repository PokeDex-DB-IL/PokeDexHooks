/* eslint-disable max-len */
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import PokemonListView from '../../components/pokemon/PokemonListView';
import { usePokemonNameHook } from '../../hooks/pokemon/PokemonNameHook';


const PokeContainer = () => {
  const  { name } = useParams();
  const location = useLocation();
  const { pokemonByName, currentPage, totalPages, handleClick } = usePokemonNameHook(name);
  
  return (
    <div>
      {new URLSearchParams(location.search)}
      {currentPage < totalPages && <button name="next" onClick={handleClick}>Next</button>}
      {currentPage} / {totalPages}
      {currentPage > 1 && <button name="previous" onClick={handleClick}>Previous</button>}
      <PokemonListView pokemon={pokemonByName} />
    </div>
  );
};

export default PokeContainer;

