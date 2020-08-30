import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import Footer from "./Footer";
import PaletteViewStyles from "../styles/PaletteViewStyles";

class PaletteView extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex", snackBarOpen: false };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeFormat(format) {
    this.setState({ format, snackBarOpen: true });
  }
  closeSnackBar() {
    this.setState({ snackBarOpen: false });
  }
  render() {
    const { colors, id, emoji, paletteName } = this.props.palette;
    const { classes } = this.props;
    const { level, format, snackBarOpen } = this.state;
    const colorsList = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={`${color.name}`}
        moreUrl={`/palette/${id}/${color.id}`}
        showingAllColors
      />
    ));
    return (
      <div className={classes.paletteView}>
        <NavBar
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
          format={format}
          snackBarOpen={snackBarOpen}
          closeSnackBar={this.closeSnackBar}
          showSlider
        />
        <div className={classes.colorsContainer}> {colorsList}</div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(PaletteViewStyles)(PaletteView);
