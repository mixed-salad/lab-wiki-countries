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
    const imgStyle = { maxHeight: '25px', marginRight: '.5em' };
    return (
      <div className="col-5" style={listContainerStyle}>
        <div className="list-group">
          {countries.map((country) => {
            return (
              <Link
                className="list-group-item list-group-item-action"
                key={country.alpha3Code}
                to={`/${country.alpha3Code}`}
              >
                <img style={imgStyle} src={country.flag} alt={country.name} />
                {/* {country.flag}  */}
                {country.name}
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CountriesList;
