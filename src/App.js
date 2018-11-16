import React, { Component } from 'react';
import './App.css';
import NavigationMenu from './components/navigationMenu';
import Welcome from './components/welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationMenu />
        <Welcome />
      </div>
    );
  }
}

export default App;
