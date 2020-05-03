<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country'
import CountryDetails from './components/CountryDetail';
import { Route, Switch } from 'react-router-dom';
=======
import React from "react";
import "./App.css";
import countries from "./countries.json";
import CountryDetail from "./CountryDetail";
import { Link, Switch, Route } from 'react-router-dom'
>>>>>>> e9191a9c2b74f48e516f2236ee922483e389e695

function App() {
  return (
    <div className="App">
<<<<<<< HEAD

      <Switch>
        <Route exact path="/" component={Country} />
        <Route exact path="/:id" component={CountryDetails} />
        <Route component={Error} />
      </Switch>

=======
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
            <div className="list-group">
              {countries.map(country => (
                <Link
                  key={country.cca3}
                  className="list-group-item list-group-item-action"
                  to={`/${country.cca3}`}
                >
                  <span>{country.flag} </span>{country.name.common}
                </Link>
              ))}
            </div>
          </div>
          <Switch>
            <Route path="/:cca3" render={ props =>
            (<CountryDetail {...props} countries={countries} />)
            } />
          </Switch>
        </div>
      </div>
>>>>>>> e9191a9c2b74f48e516f2236ee922483e389e695
    </div>
  );
}

export default App;