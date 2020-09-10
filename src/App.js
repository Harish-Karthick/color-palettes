import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import seedColors from "./utils/seedColors";
import { generateColors } from "./utils/colorHelpers";
import PaletteView from "./components/PaletteView";
import PlaetteList from "./components/PaletteList";
import SingleColorPalette from "./components/SingleColorPalette";
import NewPaletteForm from "./components/NewPaletteForm";
class App extends Component {
  findPalette(id) {
    return seedColors.find((palette) => {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
        <Route exact path='/palette/new' render={() => <NewPaletteForm />} />
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
            <PlaetteList allPalettes={seedColors} {...routeProps} />
          )}
        />
      </Switch>
    );
  }
}

export default App;
