import React, { Component } from 'react';

class AboutMe extends Component {

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
      <div id="about-wrapper">
        <h2>I am a human being.</h2>
      </div>

    );
  }
}

export default AboutMe;
