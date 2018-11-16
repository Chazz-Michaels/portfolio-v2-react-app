import React, { Component } from 'react';
//import { slide as Menu } from 'react-burger-menu';

class NavigationMenu extends Component {

  mouseEnterNavMenu = () => {
    const u1 = document.getElementById('ul-1');
    const u2 = document.getElementById('ul-2');
    const u3 = document.getElementById('ul-3');
    const u4 = document.getElementById('ul-4');
    const u5 = document.getElementById('ul-5');
    const faHome = document.getElementById('i1');
    const faGraduationCap = document.getElementById('i2');
    const faHandshake = document.getElementById('i3');
    const faBolt = document.getElementById('i4');
    const faEnvelope = document.getElementById('i5');
    u1.style.marginLeft = 0;
    u2.style.marginLeft = 0;
    u3.style.marginLeft = 0;
    u4.style.marginLeft = 0;
    u5.style.marginLeft = 0;
    faHome.style.color = '#ff6347';
    faGraduationCap.style.color = 'var(--blue)';
    faHandshake.style.color = 'var(--green)';
    faBolt.style.color = 'yellow';
    faEnvelope.style.color = 'var(--purple)';
  }
  mouseLeaveNavMenu = () => {
    const u1 = document.getElementById('ul-1');
    const u2 = document.getElementById('ul-2');
    const u3 = document.getElementById('ul-3');
    const u4 = document.getElementById('ul-4');
    const u5 = document.getElementById('ul-5');
    const faHome = document.getElementById('i1');
    const faGraduationCap = document.getElementById('i2');
    const faHandshake = document.getElementById('i3');
    const faBolt = document.getElementById('i4');
    const faEnvelope = document.getElementById('i5');
    u1.style.marginLeft = "-100px";
    u2.style.marginLeft = "-100px";
    u3.style.marginLeft = "-100px";
    u4.style.marginLeft = "-100px";
    u5.style.marginLeft = "-100px";
    faHome.style.color = '#FFFFFF';
    faGraduationCap.style.color = '#FFFFFF';
    faHandshake.style.color = '#FFFFFF';
    faBolt.style.color = '#FFFFFF';
    faEnvelope.style.color = '#FFFFFF';
  }

  render () {
    return (
      <div onMouseEnter={this.mouseEnterNavMenu} onMouseLeave={this.mouseLeaveNavMenu} id="nav-menu-wrapper">
        <div id="menu-items-wrapper">

          <div className="menu-item">
            <i className="fa fa-home" id="i1" aria-hidden="true"></i>
            <br />
            <span className="menu-item-text">Home</span>
            <span className="nav-underline" id="ul-1"></span>
          </div>

          <div className="menu-item">
            <i className="fa fa-graduation-cap" id="i2" aria-hidden="true"></i>
            <br />
            <span className="menu-item-text">About Me</span>
            <span className="nav-underline" id="ul-2"></span>
          </div>

          <div className="menu-item">
            <i className="fa fa-handshake" id="i3" aria-hidden="true"></i>
            <br />
            <span className="menu-item-text">Projects</span>
            <span className="nav-underline" id="ul-3"></span>
          </div>

          <div className="menu-item">
            <i className="fa fa-bolt" id="i4" aria-hidden="true"></i>
            <br />
            <span className="menu-item-text">Resources</span>
            <span className="nav-underline" id="ul-4"></span>
          </div>

          <div className="menu-item">
            <i className="fa fa-envelope" id="i5" aria-hidden="true"></i>
            <br />
            <span className="menu-item-text">Contact Me</span>
            <span className="nav-underline" id="ul-5"></span>
          </div>

        </div>
      </div>
    );
  }
}

export default NavigationMenu;
