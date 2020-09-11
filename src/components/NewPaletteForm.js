import React, { Component } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button } from "@material-ui/core";
import { ChromePicker } from "react-color";
import { arrayMove } from "react-sortable-hoc";
import DraggableColorList from "./DraggableColorList";

const drawerWidth = 400;

const drawerStyles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
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
    padding: theme.spacing(3),
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
});

class NewPaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      currentColor: "#234267",
      currentColorName: "",
      paletteColors: [
        { name: "red", color: "#F44336" },
        { name: "pink", color: "#E91E63" },
        { name: "purple", color: "#9C27B0" },
        { name: "deeppurple", color: "#673AB7" },
        { name: "indigo", color: "#3F51B5" },
        { name: "blue", color: "#2196F3" },
        { name: "lightblue", color: "#03A9F4" },
        { name: "cyan", color: "#00BCD4" },
        { name: "teal", color: "#009688" },
        { name: "green", color: "#4CAF50" },
      ],
      newPaletteName: "",
    };
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.changeCurrentColor = this.changeCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addColorToPalette = this.addColorToPalette.bind(this);
    this.savePaletteSubmit = this.savePaletteSubmit.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.state.paletteColors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      this.state.paletteColors.every(
        ({ color }) => color !== this.state.currentColor
      )
    );
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.allPaletteColors.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
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
  addColorToPalette() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.currentColorName,
    };
    this.setState((prevState) => ({
      paletteColors: [...prevState.paletteColors, newColor],
      currentColorName: "",
    }));
  }
  savePaletteSubmit() {
    let newPaletteName = this.state.newPaletteName;
    const paletteToSave = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
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
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ paletteColors }) => ({
      paletteColors: arrayMove(paletteColors, oldIndex, newIndex),
    }));
  };
  render() {
    const {
      open,
      currentColor,
      currentColorName,
      paletteColors,
      newPaletteName,
    } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          color='default'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={this.handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap>
              Persistent drawer
            </Typography>
            <ValidatorForm onSubmit={this.savePaletteSubmit}>
              <TextValidator
                label='Palette Name'
                name='newPaletteName'
                value={newPaletteName}
                onChange={this.handleChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "Palette name required",
                  "Plaette name already taken",
                ]}
              />
              <Button variant='contained' color='primary' type='submit'>
                Save Palette
              </Button>
            </ValidatorForm>
          </Toolbar>
        </AppBar>
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
          <h3>Design your palette</h3>
          <div>
            <Button variant='contained' color='secondary'>
              CLear Palette
            </Button>
            <Button variant='contained' color='primary'>
              Random Color
            </Button>
          </div>
          <ChromePicker
            color={currentColor}
            onChangeComplete={this.changeCurrentColor}
          />
          <ValidatorForm onSubmit={this.addColorToPalette}>
            <TextValidator
              label='Color Name'
              type='text'
              name='currentColorName'
              value={currentColorName}
              onChange={this.handleChange}
              validators={["required", "isColorNameUnique", "isColorUnique"]}
              errorMessages={[
                "This field is required",
                "Color name must be unique",
                "Color already used!",
              ]}
            />
            <Button
              variant='contained'
              color='primary'
              style={{ backgroundColor: currentColor }}
              type='submit'
            >
              Add Color
            </Button>
          </ValidatorForm>
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
