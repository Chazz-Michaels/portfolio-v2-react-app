import React, { Component } from 'react';
import './App.css';
import NavigationMenu from './components/navigationMenu';
import Welcome from './components/welcome';
import AboutMe from './components/aboutMe';

class App extends Component {
  render() {
    return (
      <div className="main-content-wrapper">
        <NavigationMenu />
        <Welcome />
        <AboutMe />
      </div>
    );
  }
}

export default App;
