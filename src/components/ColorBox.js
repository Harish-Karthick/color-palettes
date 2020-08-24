import React, { Component } from "react";
import "../styles/ColorBox.css";

class ColorBox extends Component {
  render() {
    return (
      <div
        style={{ backgroundColor: this.props.background }}
        className='colorbox'
      >
        <button className='copy-button'>Copy</button>
        <div className='color-text'>
          <span className='color-name'>{this.props.name}</span>
          <span className='see-more'>More</span>
        </div>
      </div>
    );
  }
}

export default ColorBox;
