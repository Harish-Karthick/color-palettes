import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MiniPalette from "./MiniPalette";
import paletteListStyles from "../styles/PaletteListStyles";

class PlaetteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleteDialogOpen: false,
      paletteToDelete: "",
    };
    this.showDialog = this.showDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.goToPalette = this.goToPalette.bind(this);
    this.continueDeletePalette = this.continueDeletePalette.bind(this);
  }
  showDialog(id) {
    this.setState({ isDeleteDialogOpen: true, paletteToDelete: id });
  }
  closeDialog() {
    this.setState({ isDeleteDialogOpen: false, paletteToDelete: "" });
  }
  continueDeletePalette() {
    this.props.handleDelete(this.state.paletteToDelete);
    this.setState({ isDeleteDialogOpen: false, paletteToDelete: "" });
  }
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { isDeleteDialogOpen } = this.state;
    const { allPalettes, classes } = this.props;
    return (
      <div className={classes.paletteList}>
        <div className={classes.container}>
          <nav className={classes.navBar}>
            <h1>ReactPalettes</h1>
            <Link to='/palette/new'>Create Palette</Link>
          </nav>
          <TransitionGroup className={classes.allPalettes}>
            {allPalettes.map((palette) => (
              <CSSTransition key={palette.id} timeout={500} classNames='fade'>
                <MiniPalette
                  {...palette}
                  goToPalette={this.goToPalette}
                  key={palette.id}
                  id={palette.id}
                  handleDelete={this.showDialog}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={isDeleteDialogOpen}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>
            Delete this color palette?
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              You have put so much time and effort in creating this palette.
              Deleteing this palette means, this palette will be deleted and
              there is no way to recover it. Are you sure?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant='contained'
              color='secondary'
              onClick={this.closeDialog}
            >
              Cancel
            </Button>
            <Button
              variant='contained'
              color='primary'
              onClick={this.continueDeletePalette}
            >
              Continue
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(paletteListStyles)(PlaetteList);
