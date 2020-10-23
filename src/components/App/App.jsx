/* eslint-disable max-len */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';
import PokeContainer from '../../container/pokemon/PokeContainer.jsx';
import PokemonContainer from '../../container/pokemon/PokemonContainer.jsx';
import PokemonListContainer from '../../container/pokemon/PokemonListContainer.jsx';
import SortAndSearchContainer from '../../container/pokemon/SortAndSearchContainer.jsx';
import Header from '../Header.jsx';

export default function App() {
  return <Router>
    <Header/>
    <Switch>
      <Route exact path="/" component={PokemonListContainer}/>
      <Route path="/pokemon/search/:name" component={PokeContainer} />
      <Route path="/pokemon/search/" component={SortAndSearchContainer} />
      <Route  exact path="/pokemon/id/:id" component={PokemonContainer} />
    </Switch>
  </Router>;
}
