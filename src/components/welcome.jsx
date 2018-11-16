import React, { Component } from 'react';
import MCDevLogo from '../images/mcdev-logo.png';
import EnterButtonImg from '../images/enter-button-img.png'
import Particles from 'react-particles-js';

class Welcome extends Component {

  handleMouseOverEnterButton = () => {
    const enterBtnImg = document.getElementById('enter-button-img');
    enterBtnImg.style.transform = "rotate(85deg)";
  }
  handleMouseLeaveEnterButton = () => {
    const enterBtnImg = document.getElementById('enter-button-img');
    enterBtnImg.style.transform = "rotate(-10deg)";
  }

  render () {
    return (
      <div id="welcome-wrapper">
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 160,
                "density": {
                  "enable": true,
                  "value_area": 700
                }
              },
              "color": {
                "value": "#8fe612"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 1,
                  "color": "#2979ff"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                  "enable": true,
                  "speed": 1,
                  "opacity_min": 0,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 4,
                  "size_min": 0.3,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#25e4f0",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 600
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 0,
                  "duration": 2,
                  "opacity": 0,
                  "speed": 3
                },
                "repulse": {
                  "distance": 50,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true

          }}
            style={{
              'width': '100%',
              'backgroundColor': '#090614',
              'margin': '0 0 0 0',
              'padding': '0 0 0 0'
            }}
           />

         <img src={MCDevLogo} id="mcdev-logo" alt="Michael Chase Development" />

         <div id="enter-button" onMouseOver={this.handleMouseOverEnterButton} onMouseLeave={this.handleMouseLeaveEnterButton}>
           Enter
           <img src={EnterButtonImg} id="enter-button-img" alt="-->" />
         </div>

      </div>

    );
  }
}

export default Welcome;
