import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import Footer from "./Footer";
import singleColorPaletteStyles from "../styles/SingleColorPaletteStyles";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      snackBarOpen: false,
    };
    this._shades = this.getShades(this.props.palette, this.props.colorId);
    this.changeFormat = this.changeFormat.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }
  changeFormat(format) {
    this.setState({ format, snackBarOpen: true });
  }
  closeSnackBar() {
    this.setState({ snackBarOpen: false });
  }
  getShades(palette, colorQuery) {
    let shades = [];
    let allColors = palette.colors;
    for (const key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorQuery)
      );
    }
    shades = shades.splice(1);
    return shades;
  }
  render() {
    const { format, snackBarOpen } = this.state;
    const { classes } = this.props;
    const { paletteName, emoji, id } = this.props.palette;
    const shadesMarkup = this._shades.map((shade) => (
      <ColorBox
        key={shade.name}
        showingAllColors={false}
        background={shade[format]}
        name={shade.name}
      />
    ));
    return (
      <div className={classes.paletteView}>
        <NavBar
          changeFormat={this.changeFormat}
          format={format}
          snackBarOpen={snackBarOpen}
          closeSnackBar={this.closeSnackBar}
          showSlider={false}
        />
        <div className={classes.colorsContainer}>
          {shadesMarkup}
          <div className={classes.backBox}>
            <Link to={`/palette/${id}`} className={classes.backButton}>
              Go Back
            </Link>
          </div>
        </div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(singleColorPaletteStyles)(SingleColorPalette);
