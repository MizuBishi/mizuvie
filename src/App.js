import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './grid12.css';
import ConnectedMovieListContainer from './containers/MovieListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedMovieListContainer />
      </div>
    );
  }
}

export default App;
