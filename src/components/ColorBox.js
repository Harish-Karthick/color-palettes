import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../styles/ColorBox.css";

class ColorBox extends Component {
  render() {
    const { background, name } = this.props;
    return (
      <CopyToClipboard text={background}>
        <div style={{ background }} className='colorbox'>
          <button className='copy-button'>Copy</button>
          <div className='color-text'>
            <span className='color-name'>{name}</span>
            <span className='see-more'>More</span>
          </div>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
