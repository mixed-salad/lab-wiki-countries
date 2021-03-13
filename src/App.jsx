import React from 'react';
import './App.css';
// import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    console.log('App component did mount');
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((results) => {
        console.log(results.data);
        this.loadCountries(results.data);
      })
      .catch((error) => console.log('There was an error'));

    // this.setState({
    //   countries: countries,
    // });
  }

  loadCountries = (data) => {
    console.log(data);
    this.setState({
      countries: data,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <div className="container">
            <div className="row">
              <CountriesList countries={this.state.countries} />
              <Route
                path="/:id"
                render={(props) => (
                  <CountryDetails {...props} countries={this.state.countries} />
                )}
                exact
              />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
