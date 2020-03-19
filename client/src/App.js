import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cocktails from './components/Cocktails';
import SingleCocktail from './components/singleCocktail';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ Cocktails }/>
          <Route exact path="/:id" component={ SingleCocktail }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
