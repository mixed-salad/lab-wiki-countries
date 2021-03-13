import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import countries from './../countries.json';

class CountriesList extends Component {
  //   state = {
  //     countries: countries,
  //   };

  render() {
    const listContainerStyle = { maxHeight: '90vh', overflow: 'scroll' };
    return (
      <BrowserRouter>
        <div className="col-5" style={listContainerStyle}>
          <div className="list-group">
            {countries.map((country) => {
              return (
                <Link
                  className="list-group-item list-group-item-action"
                  key={country.cca3}
                  to={`/${country.cca3}`}
                >
                  {country.flag} {country.name.official}
                </Link>
              );
            })}
          </div>
        </div>
        <Switch>
          <Route></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default CountriesList;
