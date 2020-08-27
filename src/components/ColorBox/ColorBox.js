import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlayShow: false,
    };
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }
  toggleOverlay() {
    this.setState({ overlayShow: true }, () => {
      setTimeout(() => {
        this.setState({ overlayShow: false });
      }, 2000);
    });
  }
  render() {
    const { background, name } = this.props;
    const { overlayShow } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.toggleOverlay}>
        <div style={{ background }} className='colorbox'>
          <div
            style={{ background }}
            className={`copy-overlay ${overlayShow ? "show" : ""} `}
          />
          <div className={`copy-message ${overlayShow ? "show" : ""}`}>
            <h1>Copied!</h1>
            <p>{background}</p>
          </div>
          <button className='copy-button'>Copy</button>
          <span className='color-name'>{name}</span>
          <span className='see-more'>More</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
