import React from "react";
import { withStyles } from "@material-ui/core/styles";
import miniPaletteStyles from "../styles/MiniPaletteStyles";

function MiniPalette(props) {
  const { paletteName, emoji, classes, colors } = props;
  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.miniColor}
      key={color.name + color.color}
      style={{ backgroundColor: color.color }}
    ></div>
  ));
  return (
    <div className={classes.root} onClick={props.handleClick}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(miniPaletteStyles)(MiniPalette);
