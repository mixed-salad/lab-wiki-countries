import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import countries from './../countries.json';

class CountriesList extends Component {
  //   state = {
  //     countries: countries,
  //   };

  render() {
    const countries = this.props.countries;
    const listContainerStyle = { maxHeight: '90vh', overflow: 'scroll' };
    return (
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
    );
  }
}

export default CountriesList;
