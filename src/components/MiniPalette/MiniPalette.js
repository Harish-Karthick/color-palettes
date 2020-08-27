import React from "react";
import { withStyles } from "@material-ui/core/styles";

const miniPaletteStyles = {
  root: {
    backgroundColor: "#fff",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer",
    },
  },
  title: {
    color: "black",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    margin: "0",
    paddingTop: "o.5rem",
  },
  emoji: {
    fontSize: "1.5rem",
    marginLeft: "0.5rem",
  },
};

function MiniPalette(props) {
  const { paletteName, emoji, classes, colors } = props;
  return (
    <div className={classes.root}>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(miniPaletteStyles)(MiniPalette);
