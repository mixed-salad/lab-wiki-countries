import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import countries from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    console.log('component did mount');
    this.setState({
      countries: countries,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />

          <div className="container">
            <div className="row">
              <CountriesList />
              <Route path="/:id" component={CountryDetails} exact />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
