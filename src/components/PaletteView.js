import React, { Component } from "react";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar/NavBar";
import "../styles/PaletteView.css";

class PaletteView extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeFormat(format) {
    this.setState({ format });
  }
  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const colorsList = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={`${color.name}-${color.color}`}
      />
    ));
    return (
      <div className='paletteview'>
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
          format={format}
        />
        <div className='colors-container'> {colorsList}</div>
      </div>
    );
  }
}

export default PaletteView;
