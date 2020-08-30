import React from "react";
import { withStyles } from "@material-ui/core/styles";
import footerStyles from "../styles/PaletteFooterStyles";

function Footer(props) {
  const { paletteName, classes, emoji } = props;
  return (
    <footer className={classes.paletteFooter}>
      <h6 className={classes.paletteFooterTitle}>{paletteName}</h6>
      <span className={classes.paletteFooterEmoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(footerStyles)(Footer);
