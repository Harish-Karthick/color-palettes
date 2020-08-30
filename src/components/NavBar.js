import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import logo from "../assets/images/palette-logo.png";
import InputSlider from "./InputSlider";
import navBarStyles from "../styles/NavBarStyles";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSnackBarClose = this.handleSnackBarClose.bind(this);
  }
  handleChange(event) {
    this.props.changeFormat(event.target.value);
  }
  handleSnackBarClose() {
    this.props.closeSnackBar();
  }
  render() {
    const {
      level,
      changeLevel,
      format,
      snackBarOpen,
      classes,
      showSlider,
    } = this.props;
    return (
      <header className={classes.header}>
        <nav>
          <Link to='/' className={classes.navLink}>
            <img src={logo} alt='palette-logo' width='30' height='auto' />
            <span className={classes.navLinkText}>ReactPalettes</span>
          </Link>
        </nav>
        {showSlider && (
          <div className={classes.sliderContainer}>
            <label htmlFor='colorLevelPicker' className={classes.sliderLabel}>
              {`Level : ${level}`}
            </label>
            <InputSlider
              level={level}
              changeLevel={changeLevel}
              label='Level'
              id='colorLevelPicker'
            />
          </div>
        )}
        <div className={classes.selectContainer}>
          <InputLabel id='formatSelect'>Color Format</InputLabel>
          <Select
            id='formatSelect'
            value={format}
            onChange={this.handleChange}
            className={classes.selectInput}
          >
            <MenuItem value='hex'>Hex - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255,255,255,1)</MenuItem>
            <MenuItem value='hsl'>HSL - hsl(0,0%,0%)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={snackBarOpen}
          autoHideDuration={3000}
          onClose={this.handleSnackBarClose}
          message={`Format changed to ${format.toUpperCase()}`}
          action={
            <React.Fragment>
              <IconButton
                size='small'
                aria-label='close'
                color='inherit'
                onClick={this.handleSnackBarClose}
              >
                <CloseIcon fontSize='small' />
              </IconButton>
            </React.Fragment>
          }
        />
      </header>
    );
  }
}

export default withStyles(navBarStyles)(NavBar);
