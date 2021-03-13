import React, { Component } from 'react';
// import countries from './../countries.json';
import { Link } from 'react-router-dom';

class CountryDetails extends Component {
  state = {
    country: null,
  };

  componentDidMount() {
    console.log('couintry details component did mount');
    this.loadCountryDetails();
  }

  componentDidUpdate(previousProps, previousState) {
    console.log('country details component has been updated');
    if (previousProps.match.params.id !== this.props.match.params.id) {
      this.loadCountryDetails();
    }
  }

  loadCountryDetails = () => {
    const countries = this.props.countries;
    const country = countries.find(
      (item) => item.alpha3Code === this.props.match.params.id
    );
    this.setState({
      country: country,
    });
  };

  render() {
    console.log('country details is rendering');

    if (this.state.country) {
      const { capital, name, area, borders } = this.state.country;
      return (
        <div className="col-7">
          <h1>{name}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {area} km<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {borders.map((borderingCountry) => {
                      const country = this.props.countries.find(
                        (country) => country.alpha3Code === borderingCountry
                      );
                      return (
                        <li key={country.alpha3Code}>
                          <Link to={`/${country.alpha3Code}`}>
                            {country.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default CountryDetails;
