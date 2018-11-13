import React, { Component } from 'react';
//import { slide as Menu } from 'react-burger-menu';

class NavigationMenu extends Component {

  render () {
    return (
      <div id="nav-menu-wrapper">
        <div id="menu-items-wrapper">
          <div className="menu-item">
            <i className="fa fa-home" aria-hidden="true"></i>
            <br />
            <span className="menu-item-text">Home</span>
          </div>
          <div className="menu-item">
            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
            <br />
            <span className="menu-item-text">About Me</span>
          </div>
          <div className="menu-item">
            <i className="fa fa-handshake" aria-hidden="true"></i>
            <br />
            <span className="menu-item-text">Projects</span>
          </div>
          <div className="menu-item">
            <i className="fa fa-bolt" aria-hidden="true"></i>
            <br />
            <span className="menu-item-text">Resources</span>
          </div>
          <div className="menu-item">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <br />
            <span className="menu-item-text">Contact Me</span>
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationMenu;
