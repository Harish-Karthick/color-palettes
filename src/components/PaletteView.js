import React, { Component } from "react";
import "../styles/PaletteView.css";
import ColorBox from "./ColorBox";

class PaletteView extends Component {
  render() {
    const { color } = this.props;
    const colorsList = color.colors.map((color) => (
      <ColorBox background={color.color} name={color.name} />
    ));
    return (
      <div className='paletteview'>
        <div className='colors-container'> {colorsList}</div>
      </div>
    );
  }
}

export default PaletteView;
