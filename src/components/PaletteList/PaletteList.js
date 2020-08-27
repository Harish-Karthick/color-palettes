import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "../MiniPalette/MiniPalette";
import { withStyles } from "@material-ui/core/styles";

const paletteListStyles = {
  paletteList: {
    height: "100vh",
    backgroundColor: "blue",
  },
  navBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& h1": {
      color: "#fff",
      margin: "1rem 0",
    },
  },
  container: {
    width: "50%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  allPalettes: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "5%",
  },
};

class PlaetteList extends Component {
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
              <MiniPalette {...palette} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(paletteListStyles)(PlaetteList);
