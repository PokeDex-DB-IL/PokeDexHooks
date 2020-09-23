/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { getAllPokemon } from '../../services/apiFetches';


export const sortByPokemonName = (a, b) => {
  const pokemon1 = a.name.toUpperCase();
  const pokemon2 = b.name.toUpperCase();

  let comparison = 0;
  if(pokemon1 > pokemon2) return comparison = 1;
  if(pokemon1 < pokemon2) return comparison = -1;

  return comparison;

}; 

export const useListPokemon = () => {

  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    getAllPokemon(currentPage)
      .then(({ count, perPage, results }) => results.map(result => ({
        count,
        perPage,
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
  }, [currentPage]);
  
  const handleClick = ({ target }) => {
    if(target.name === 'next') setCurrentPage(currentPage => currentPage + 1);
    if(target.name === 'previous') setCurrentPage(currentPage => currentPage - 1);
  };

  return {
    pokemon, 
    currentPage,
    totalPages,
    handleClick,
    loading
  };
};
