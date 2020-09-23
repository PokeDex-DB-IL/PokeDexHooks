/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { fetchByName } from '../../services/apiFetches';
import { sortByPokemonName } from './PokemonListHook';


export const usePokemonNameHook = name => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pokemonByName, setPokemonByName] = useState([]);

  useEffect(() => {
    fetchByName(name)
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
        setPokemonByName(alphabeticalPokemon);
        const totalPages = Math.ceil(result[0]?.count / result[0]?.perPage);
        if(isNaN(totalPages)) return setTotalPages(0), setCurrentPage(0);
        setTotalPages(totalPages);
        setCurrentPage(1);
      });
  }, [name]);

  useEffect(() => {
    fetchByName(name, currentPage)
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
        setPokemonByName(result);
        const totalPages = Math.ceil(result[0]?.count / result[0]?.perPage);
        setTotalPages(totalPages);
      });

  }, [currentPage]);

  const handleClick = ({ target }) => {
    if(target.name === 'next') setCurrentPage(currentPage => currentPage + 1);
    if(target.name === 'previous') setCurrentPage(currentPage => currentPage - 1);
  };

  return {
    currentPage,
    pokemonByName,
    totalPages, 
    handleClick
  };
};

