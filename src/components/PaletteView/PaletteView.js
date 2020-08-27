import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";
import NavBar from "../NavBar/NavBar";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./PaletteView.css";

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
    const { colors, id, emoji } = this.props.palette;
    const { level, format, snackBarOpen } = this.state;
    const colorsList = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={`${color.name}`}
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
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={snackBarOpen}
          autoHideDuration={3000}
          onClose={this.closeSnackBar}
          message={`Format changed to ${format.toUpperCase()}`}
          action={
            <React.Fragment>
              <IconButton
                size='small'
                aria-label='close'
                color='inherit'
                onClick={this.closeSnackBar}
              >
                <CloseIcon fontSize='small' />
              </IconButton>
            </React.Fragment>
          }
        />
        <footer className='palette-footer'>
          <h6>{id}</h6>
          <span className='palette-emoji'>{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default PaletteView;
