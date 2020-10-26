import { useEffect, useState } from 'react';

import { getAllPokemon } from '../../services/apiFetches';

export const getTotalPagesHook = () => {
  const [totalPages, setTotalPages] = useState([]);
 
  useEffect(() => {
    getAllPokemon(1)
      .then(({ count, perPage }) => ({
        count, 
        perPage
      }))
      .then(result => {
        const totalPages = Number(Math.ceil(result.count / result.perPage));
        setTotalPages(totalPages);
      });
  }, []);
  
  return {
    totalPages
  };
};
