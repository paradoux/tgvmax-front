//React imports
import React, { Component } from 'react';

//Component imports
import Searchbar from './containers/Searchbar';
import Trainlist from './containers/Trainlist';

//Style imports
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <Trainlist />
      </div>
    );
  }
}

export default App;
