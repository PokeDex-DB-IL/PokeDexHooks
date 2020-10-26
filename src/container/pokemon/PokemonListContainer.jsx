/* eslint-disable max-len */
import React from 'react';
import { useListPokemon } from '../../hooks/pokemon/PokemonListHook.jsx';
import PokemonListView from '../../components/pokemon/PokemonListView.jsx';
import styles from './PokemonListContainer.css';
import { useHistory, useLocation } from 'react-router-dom';
import { getTotalPagesHook } from '../../hooks/pokemon/getTotalPagesHook.jsx';


// const newHistory = useHistory();


// const comparePageParams = (params, pageTotal) => {
//   if(isNaN(params)) return params = 1;
//   if(params <= 0) return params = 1;
//   if(params > pageTotal) return pageTotal;
//   else return params;
// };


const PokemonListContainer = () => {
  const history = useHistory();
  const locationSearch = useLocation().search;
  const { totalPages } = getTotalPagesHook();
  
  let pageParams = Number(new URLSearchParams(locationSearch).get('page'));
  // const checkedParams = comparePageParams(pageParams, totalPages);
  // if(checkedParams === 1) { history.push('?page=1');}
  if(isNaN(pageParams)){ pageParams = 1 && history.push('?page=1');}
  if(pageParams <= 0) { pageParams = 1 && history.push('?page=1');}
  if(pageParams > 34){ pageParams = 34 && history.push('?page=34');}
  
  const { pokemon, loading, currentPage, handleClick } = useListPokemon(pageParams);

  if(loading) return <h1>Loading....</h1>;

  return (
    
    <div className={styles.Pokemon}>
      <section>
        
        { <button disabled={currentPage === 1} name="previous" onClick={handleClick}>&lt;</button>}
        {currentPage} / {totalPages}
        <button disabled={currentPage === totalPages} max={totalPages} name="next" onClick={handleClick}>&gt;</button>
      </section>
      <PokemonListView className={styles.Pokemon} pokemon={pokemon}/>
    </div>
  );
};

export default PokemonListContainer;
