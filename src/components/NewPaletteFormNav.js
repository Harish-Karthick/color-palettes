import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import PaletteNameForm from "./PaletteNameForm";
import drawerStyles from "../styles/NewPaletteFormNavStyles";

class NewPaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingPaletteNameForm: false,
    };
    this.showPaletteNameForm = this.showPaletteNameForm.bind(this);
    this.hidePaletteNameForm = this.hidePaletteNameForm.bind(this);
  }
  showPaletteNameForm() {
    this.setState({ showingPaletteNameForm: true });
  }
  hidePaletteNameForm() {
    this.setState({ showingPaletteNameForm: false });
  }
  render() {
    const { classes, open, allPaletteColors } = this.props;

    return (
      <>
        <AppBar
          position='fixed'
          color='default'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar className={classes.toolBar}>
            <div className={classes.navbarText}>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={this.props.handleDrawerOpen}
                edge='start'
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <LibraryAddIcon />
              </IconButton>
              <Typography variant='h6' noWrap>
                Create a palette
              </Typography>
            </div>
            <div className={classes.navbarForm}>
              <Button
                variant='contained'
                color='primary'
                onClick={this.showPaletteNameForm}
              >
                Save Palette
              </Button>
              <Link to='/' className={classes.goBackButton}>
                <Button variant='contained' color='secondary'>
                  Go Back
                </Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        {this.state.showingPaletteNameForm && (
          <PaletteNameForm
            allPaletteColors={allPaletteColors}
            handleSubmit={this.props.handleSubmit}
            closeDialog={this.hidePaletteNameForm}
            showing={this.state.showingPaletteNameForm}
          />
        )}
      </>
    );
  }
}

export default withStyles(drawerStyles, { withTheme: true })(NewPaletteFormNav);
