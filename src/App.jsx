import React from 'react';
import './App.css';
import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    console.log('App component did mount');
    this.setState({
      countries: countries,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <div className="container">
            <div className="row">
              <CountriesList countries={this.state.countries} />
              <Route path="/:id" component={CountryDetails} exact />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
