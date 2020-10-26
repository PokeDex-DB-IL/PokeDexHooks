/* eslint-disable max-len */
import { useEffect, useState } from 'react';

import { fetchAllTypes } from '../../services/apiFetches';

export const useTypeHook = () => {
  const [allPokeTypes, setAllPokeTypes] = useState([]);
 
  useEffect(() => {
    fetchAllTypes()
      .then(response => response.map(item => item.type))
      .then(setAllPokeTypes);
  }, []);
  
  return {
    allPokeTypes
  };
};





