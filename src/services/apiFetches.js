/* eslint-disable max-len */
import { get } from './request';

export const fetchSearchedPokemon = (search = '') => {
  return get(`?pokemon=${search}`);
};

export const getAllPokemon = (page = 1) => {
  return get(`?page=${page}&perPage=24`);
};

export const fetchOnePokemon = id => {
  return get(`/${id}`);
};

export const fetchAllTypes = () => {
  return get('/types');
};

export const fetchByName = (name = '',  page = 1) => {
  return get(`?pokemon=${name}&page=${page}&perPage=24`);
};

export const fetchByTypeList = (type, page = 1) => {
  return get(`?type=${type}&page=${page}&perPage=24`);
};
