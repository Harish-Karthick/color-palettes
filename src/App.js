import React from "react";
import seedColors from "./utils/seedColors";
import { generateColors } from "./utils/colorHelpers";
import PaletteView from "./components/PaletteView";
function App() {
  console.log(generateColors(seedColors[0]));
  return (
    <div className='App'>
      <PaletteView color={{ ...seedColors[0] }} />
    </div>
  );
}

export default App;
