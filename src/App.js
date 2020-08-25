import React from "react";
import seedColors from "./utils/seedColors";
import { generateColors } from "./utils/colorHelpers";
import PaletteView from "./components/PaletteView";
function App() {
  return (
    <div className='App'>
      <PaletteView palette={generateColors(seedColors[0])} />
    </div>
  );
}

export default App;
