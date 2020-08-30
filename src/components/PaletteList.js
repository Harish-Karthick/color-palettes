import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { withStyles } from "@material-ui/core/styles";
import paletteListStyles from "../styles/PaletteListStyles";

class PlaetteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { allPalettes, classes } = this.props;
    return (
      <div className={classes.paletteList}>
        <div className={classes.container}>
          <nav className={classes.navBar}>
            <h1>ReactPalettes</h1>
          </nav>
          <div className={classes.allPalettes}>
            {allPalettes.map((palette) => (
              <MiniPalette
                {...palette}
                handleClick={() => this.goToPalette(palette.id)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(paletteListStyles)(PlaetteList);
