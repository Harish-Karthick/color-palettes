import React, { Component } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import arrayMove from "array-move";
import DraggableColorList from "./DraggableColorList";
import NewPaletteFormNav from "./NewPaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";

const drawerWidth = 400;

const drawerStyles = (theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    marginTop: "64px",
    padding: "0",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  newColorFormContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 1rem",
  },
  buttonContainer: {
    margin: "1rem 0",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
  },
});

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
      paletteColors: this.props.allPaletteColors[0].colors,
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
  savePaletteSubmit(newName) {
    const paletteToSave = {
      paletteName: newName,
      id: newName.toLowerCase().replace(/ /g, "-"),
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
    const allPaletteColors = this.props.allPaletteColors
      .map((p) => p.colors)
      .flat();
    const paletteSet = new Set(this.state.paletteColors.map((p) => p.color));
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * allPaletteColors.length);
    } while (paletteSet.has(allPaletteColors[randomNumber].color) === true);
    this.setState((prevState) => ({
      paletteColors: [
        ...prevState.paletteColors,
        allPaletteColors[randomNumber],
      ],
    }));
  }
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ paletteColors }) => ({
      paletteColors: arrayMove(paletteColors, oldIndex, newIndex),
    }));
  };
  render() {
    const { open, paletteColors } = this.state;
    const { classes, maxColors } = this.props;
    const isPaletteFull = paletteColors.length >= maxColors;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <NewPaletteFormNav
          open={open}
          handleDrawerOpen={this.handleDrawerOpen}
          allPaletteColors={this.props.allPaletteColors}
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
          <Divider />
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
