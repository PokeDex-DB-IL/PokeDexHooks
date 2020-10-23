/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { useHistory, useLocation, useParams } from 'react-router-dom';
import { getAllPokemon } from '../../services/apiFetches';


export const sortByPokemonName = (a, b) => {
  const pokemon1 = a.name.toUpperCase();
  const pokemon2 = b.name.toUpperCase();

  let comparison = 0;
  if(pokemon1 > pokemon2) return comparison = 1;
  if(pokemon1 < pokemon2) return comparison = -1;

  return comparison;

}; 

export const useListPokemon = (pageParams) => {
  
  const history = useHistory();
  const [pokemon, setPokemon] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

    
  useEffect(() => {
    setLoading(true);
    getAllPokemon(pageParams)
      .then(({ count, perPage, results, page }) => results.map(result => ({
        count,
        perPage,
        page,
        id: result._id,
        name: result.pokemon.charAt(0).toUpperCase() + result.pokemon.slice(1),
        HP: result.hp,
        image: result.url_image,
        attack: result.attack,
        defense: result.defense,
        speed: result.speed,
        type1: result.type_1
      })))
      .then(result => {
        const alphabeticalPokemon = result.sort(sortByPokemonName);
        setPokemon(alphabeticalPokemon);
        const totalPages = Math.ceil(result[0]?.count / result[0]?.perPage);
        setTotalPages(totalPages);
      })
      .finally(() => setLoading(false));
  }, [pageParams]);
    
 
  const handleClick = ({ target }) => {
    if(target.name === 'next')  history.push(`?page=${pageParams + 1}`);
    if(target.name === 'previous') history.push(`?page=${pageParams - 1} `);
  };

  return {
    pokemon, 
    currentPage: pageParams,
    totalPages,
    handleClick,
    loading,

  };
};
