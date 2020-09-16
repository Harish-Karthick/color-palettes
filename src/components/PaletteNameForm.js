import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

class PaletteNameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: "",
      form: "paletteName",
    };
    this.handleChange = this.handleChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.emojiPicked = this.emojiPicked.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.allPaletteColors.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  showEmojiPicker() {
    this.setState({ form: "emoji" });
  }
  emojiPicked(emoji) {
    const newPaletteInfo = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native,
    };
    this.props.handleSubmit(newPaletteInfo);
  }
  render() {
    const { newPaletteName } = this.state;
    return (
      <div>
        <Dialog
          open={this.props.showing && this.state.form === "paletteName"}
          onClose={this.props.closeDialog}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>Save Palette</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Give your beautiful palette a name. Please make sure you don't
                use an existing palette name.
              </DialogContentText>
              <TextValidator
                label='Palette Name'
                name='newPaletteName'
                fullWidth
                margin='normal'
                value={newPaletteName}
                onChange={this.handleChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "Palette name required",
                  "Plaette name already taken",
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button
                variant='contained'
                onClick={this.props.closeDialog}
                color='secondary'
              >
                Cancel
              </Button>
              <Button
                variant='contained'
                color='primary'
                type='submit'
                margin='normal'
              >
                Continue
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
        <Dialog
          open={this.props.showing && this.state.form === "emoji"}
          onClose={this.props.closeDialog}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>
            Pick an emoji for your palette
          </DialogTitle>
          <DialogContent>
            <Picker showSkinTones={false} onSelect={this.emojiPicked} />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default PaletteNameForm;
