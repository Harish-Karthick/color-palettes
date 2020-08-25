import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { withStyles } from "@material-ui/core/styles";
import logo from "../../assets/images/palette-logo.png";
import InputSlider from "../InputSlider/InputSlider";
import classes from "./NavBar.module.css";

const muiStyles = {
  selectInput: {
    width: "100%",
    maxWidth: "250px",
  },
};
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.changeFormat(event.target.value);
  }
  render() {
    const { level, changeLevel, format } = this.props;
    return (
      <header className={classes.Header}>
        <nav className={classes.NavBar}>
          <a href='/' className={classes.NavLink}>
            <img src={logo} alt='palette-logo' width='30' height='auto' />
            <span className={classes.NavLink__Text}>ReactPalettes</span>
          </a>
        </nav>
        <div className={classes.Slider__container}>
          <label htmlFor='colorLevelPicker' className={classes.Slider__label}>
            {`Level : ${level}`}
          </label>
          <InputSlider
            level={level}
            changeLevel={changeLevel}
            label='Level'
            id='colorLevelPicker'
          />
        </div>
        <div className={classes.Select__container}>
          <InputLabel id='formatSelect'>Color Format</InputLabel>
          <Select
            id='formatSelect'
            value={format}
            onChange={this.handleChange}
            className={this.props.classes.selectInput}
          >
            <MenuItem value='hex'>Hex - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255,255,255,1)</MenuItem>
            <MenuItem value='hsl'>HSL - hsl(0,0%,0%)</MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default withStyles(muiStyles)(NavBar);
