import React from 'react';
import PokemonSearchContainer from './PokemonSearchContainer';
import SelectorContainer from './SelectorContainer';
import styles from './SortAndSearchContainer.css';

const SortAndSearchContainer = () => {
  return (
    <div className={styles.SortContainer}>
      <p>Search by name or by type.</p>
      <PokemonSearchContainer />
      <SelectorContainer />
    </div>
  );
};

export default SortAndSearchContainer;
