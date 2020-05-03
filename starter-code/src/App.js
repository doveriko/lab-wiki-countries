import React from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country'
import CountryDetails from './components/CountryDetail';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Country} />
        <Route exact path="/:id" component={CountryDetails} />
        <Route component={Error} />
      </Switch>

    </div>
  );
}

export default App;