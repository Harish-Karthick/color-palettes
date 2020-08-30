import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import inputSliderStyles from "../styles/InputSliderStyles";

class InputSlider extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.changeLevel(event.target.value);
  }
  render() {
    const { level, id, classes } = this.props;
    return (
      <input
        className={classes.inputSlider}
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

export default withStyles(inputSliderStyles)(InputSlider);
