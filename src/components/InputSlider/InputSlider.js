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
    const { level, id } = this.props;
    return (
      <input
        className={classes.InputSlider}
        type='range'
        value={level}
        min='100'
        max='900'
        step='100'
        id={id}
        onChange={this.handleChange}
      />
    );
  }
}

export default InputSlider;
