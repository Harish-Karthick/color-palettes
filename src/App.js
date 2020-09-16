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
    const localStoragePalettes = JSON.parse(
      window.localStorage.getItem("palettes")
    );
    this.state = {
      allPaletteColors: localStoragePalettes || seedColors,
    };
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }
  savePalette(newPalette) {
    this.setState(
      (prevState) => ({
        allPaletteColors: [...prevState.allPaletteColors, newPalette],
      }),
      this.syncLocalStorage
    );
  }
  deletePalette(id) {
    this.setState(
      (prevState) => ({
        allPaletteColors: prevState.allPaletteColors.filter(
          (palette) => palette.id !== id
        ),
      }),
      this.syncLocalStorage
    );
  }
  findPalette(id) {
    return this.state.allPaletteColors.find((palette) => {
      return palette.id === id;
    });
  }
  syncLocalStorage() {
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.allPaletteColors)
    );
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
              handleDelete={this.deletePalette}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
