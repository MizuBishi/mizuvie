import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './grid12.css';

import ConnectedListContainer from './containers/ListContainer';
import ConnectedOverviewContainer from './containers/OverviewContainer';
import ConnectedNewContainer from './containers/NewContainer';
import ConnectedEditContainer from './containers/EditContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedListContainer />
        <ConnectedOverviewContainer />
        <ConnectedNewContainer />
        <ConnectedEditContainer />
      </div>
    );
  }
}

export default App;
