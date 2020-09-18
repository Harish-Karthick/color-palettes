import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles";
import DeleteButton from "@material-ui/icons/Delete";
import miniPaletteStyles from "../styles/MiniPaletteStyles";

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleDelete(event) {
    event.stopPropagation();
    this.props.handleDelete(this.props.id);
  }
  handleClick() {
    this.props.goToPalette(this.props.id);
  }
  render() {
    const { paletteName, emoji, classes, colors } = this.props;
    const miniColorBoxes = colors.map((color) => (
      <div
        className={classes.miniColor}
        key={color.name + color.color}
        style={{ backgroundColor: color.color }}
      ></div>
    ));
    return (
      <div className={classes.root} onClick={this.handleClick}>
        <button className={classes.deleteButton} onClick={this.handleDelete}>
          <DeleteButton className={classes.deleteIcon} />
        </button>
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(miniPaletteStyles)(MiniPalette);
