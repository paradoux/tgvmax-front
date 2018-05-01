//React imports
import React, { Component } from 'react';

//Component imports
import Banner from './components/Banner';
import Trainlist from './containers/Trainlist';

//Style imports
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Banner />
        <Trainlist />
      </div>
    );
  }
}

export default App;
