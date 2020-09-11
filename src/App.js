import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import seedColors from "./utils/seedColors";
import { generateColors } from "./utils/colorHelpers";
import PaletteView from "./components/PaletteView";
import PlaetteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPaletteColors: seedColors,
    };
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }
  savePalette(newPalette) {
    this.setState((prevState) => ({
      allPaletteColors: [...prevState.allPaletteColors, newPalette],
    }));
  }
  findPalette(id) {
    return this.state.allPaletteColors.find((palette) => {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/palette/new'
          render={(routeProps) => (
            <NewPaletteForm
              savePalette={this.savePalette}
              {...routeProps}
              allPaletteColors={this.state.allPaletteColors}
            />
          )}
        />
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={(routeProps) => (
            <SingleColorPalette
              palette={generateColors(
                this.findPalette(routeProps.match.params.paletteId)
              )}
              colorId={routeProps.match.params.colorId}
            />
          )}
        />
        <Route
          exact
          path='/palette/:id'
          render={(routeProps) => (
            <PaletteView
              palette={generateColors(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path='/'
          render={(routeProps) => (
            <PlaetteList
              allPalettes={this.state.allPaletteColors}
              {...routeProps}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
