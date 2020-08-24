import React from "react";
import seedColors from "./utils/seedColors";
import PaletteView from "./components/PaletteView";
function App() {
  return (
    <div className='App'>
      <PaletteView color={{ ...seedColors[0] }} />
    </div>
  );
}

export default App;
