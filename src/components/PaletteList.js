import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import MiniPalette from "./MiniPalette";
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
            <Link to='/palette/new'>Create Palette</Link>
          </nav>
          <div className={classes.allPalettes}>
            {allPalettes.map((palette) => (
              <MiniPalette
                {...palette}
                handleClick={() => this.goToPalette(palette.id)}
                key={palette.id}
                id={palette.id}
                handleDelete={this.props.handleDelete}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(paletteListStyles)(PlaetteList);
