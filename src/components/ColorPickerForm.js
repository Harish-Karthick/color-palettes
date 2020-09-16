import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ChromePicker } from "react-color";
import ColorPickerFormStyles from "../styles/ColorPickerFormStyles";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "#008080",
      currentColorName: "",
    };
    this.changeCurrentColor = this.changeCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.props.paletteColors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", (value) =>
      this.props.paletteColors.every(
        ({ color }) =>
          color.toLowerCase() !== this.state.currentColor.toLowerCase()
      )
    );
  }
  changeCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.currentColorName,
    };
    console.log("clicked");
    this.props.handleSubmit(newColor);
  }
  render() {
    const { currentColor, currentColorName } = this.state;
    const { isPaletteFull, classes } = this.props;
    return (
      <div className={classes.colorPickerContainer}>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.changeCurrentColor}
          className={classes.colorPicker}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            label='Color Name'
            type='text'
            name='currentColorName'
            value={currentColorName}
            onChange={this.handleChange}
            fullWidth
            margin='normal'
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
            style={{
              backgroundColor: isPaletteFull
                ? "rgba(0, 0, 0, 0.12)"
                : currentColor,
            }}
            type='submit'
            disabled={isPaletteFull}
            className={classes.addColorButton}
          >
            {isPaletteFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(ColorPickerFormStyles)(ColorPickerForm);
