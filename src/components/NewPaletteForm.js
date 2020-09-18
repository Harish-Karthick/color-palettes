import React, { Component } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import arrayMove from "array-move";
import seedColors from "../utils/seedColors";
import DraggableColorList from "./DraggableColorList";
import NewPaletteFormNav from "./NewPaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import drawerStyles from "../styles/NewPaletteFormStyles";

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20,
  };
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      currentColor: "#234267",
      currentColorName: "",
      paletteColors: seedColors[0].colors,
    };
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.addColorToPalette = this.addColorToPalette.bind(this);
    this.savePaletteSubmit = this.savePaletteSubmit.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }
  handleDrawerClose() {
    this.setState({ open: false });
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  changeCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }
  addColorToPalette(newColor) {
    this.setState((prevState) => ({
      paletteColors: [...prevState.paletteColors, newColor],
      currentColorName: "",
    }));
  }
  savePaletteSubmit(newPaletteInfo) {
    const paletteToSave = {
      paletteName: newPaletteInfo.paletteName,
      id: newPaletteInfo.paletteName.toLowerCase().replace(/ /g, "-"),
      emoji: newPaletteInfo.emoji,
      colors: this.state.paletteColors,
    };
    this.props.savePalette(paletteToSave);
    this.props.history.push("/");
  }
  deleteColor(colorName) {
    this.setState((prevState) => ({
      paletteColors: prevState.paletteColors.filter(
        (color) => color.name !== colorName
      ),
    }));
  }
  clearPalette() {
    this.setState({ paletteColors: [] });
  }
  addRandomColor() {
    const allPaletteColors = seedColors.map((p) => p.colors).flat();
    let randomNumber;
    let isColorRepeated = true;
    let randomColor;
    do {
      randomNumber = Math.floor(Math.random() * allPaletteColors.length);
      randomColor = allPaletteColors[randomNumber];
      isColorRepeated = this.state.paletteColors.some(
        // eslint-disable-next-line
        (color) => color.color === randomColor
      );
    } while (isColorRepeated);
    this.setState((prevState) => ({
      paletteColors: [...prevState.paletteColors, randomColor],
    }));
  }
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ paletteColors }) => ({
      paletteColors: arrayMove(paletteColors, oldIndex, newIndex),
    }));
  };
  render() {
    const { open, paletteColors } = this.state;
    const { classes, maxColors, allPaletteColors } = this.props;
    const isPaletteFull = paletteColors.length >= maxColors;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <NewPaletteFormNav
          open={open}
          handleDrawerOpen={this.handleDrawerOpen}
          allPaletteColors={allPaletteColors}
          handleSubmit={this.savePaletteSubmit}
        />
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <div className={classes.newColorFormContainer}>
            <Typography variant='h4' noWrap>
              Design Your Palette
            </Typography>
            <div className={classes.buttonContainer}>
              <Button
                variant='contained'
                color='secondary'
                onClick={this.clearPalette}
              >
                CLear Palette
              </Button>
              <Button
                variant='contained'
                color='primary'
                onClick={this.addRandomColor}
                disabled={isPaletteFull}
              >
                Random Color
              </Button>
            </div>
            <ColorPickerForm
              paletteColors={paletteColors}
              isPaletteFull={isPaletteFull}
              handleSubmit={this.addColorToPalette}
            />
          </div>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <DraggableColorList
            allColors={paletteColors}
            deleteColor={this.deleteColor}
            axis='xy'
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}
export default withStyles(drawerStyles, { withTheme: true })(NewPaletteForm);
