import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import seedColors from "./utils/seedColors";
import { generateColors } from "./utils/colorHelpers";
import PaletteView from "./components/PaletteView/PaletteView";
import PlaetteList from "./components/PaletteList/PaletteList";
class App extends Component {
  findPalette(id) {
    return seedColors.find((palette) => {
      return palette.id === id;
    });
  }
  render() {
    return (
      <Switch>
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
          render={() => <PlaetteList allPalettes={seedColors} />}
        />
      </Switch>
    );
  }
}

export default App;
