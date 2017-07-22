import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './grid12.css';
import ConnectedMovieListContainer from './containers/MovieListContainer';
import ConnectedOverviewListContainer from './containers/OverviewListContainer';
import ConnectedNewMovieListContainer from './containers/NewMovieListContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedNewMovieListContainer />
        <ConnectedOverviewListContainer />
        <ConnectedMovieListContainer />
      </div>
    );
  }
}

export default App;
