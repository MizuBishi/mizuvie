import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './grid12.css';

import ConnectedMovieListContainer from './containers/ListContainer';
import ConnectedOverviewListContainer from './containers/OverviewContainer';
import ConnectedNewMovieListContainer from './containers/NewContainer';
import ConnectedEditContainer from './containers/EditContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedMovieListContainer />
        <ConnectedOverviewListContainer />
        <ConnectedNewMovieListContainer />
        <ConnectedEditContainer />
      </div>
    );
  }
}

export default App;
