import React, { Component } from "react";
import classes from "./InputSlider.module.css";

class InputSlider extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.changeLevel(event.target.value);
  }
  render() {
    return (
      <input
        className={classes.InputSlider}
        type='range'
        value={this.props.level}
        min='100'
        max='900'
        step='100'
        onChange={this.handleChange}
      />
    );
  }
}

export default InputSlider;
