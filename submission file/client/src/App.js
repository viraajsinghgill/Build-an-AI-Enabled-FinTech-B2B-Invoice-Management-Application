import Headerr from "./components/Headerr.js";
import Footerr from "./components/Footerr.js";

import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
     <div> <Headerr /></div>
      <HomePage />
      {/* <Trial /> */}
   <div>   <Footerr /></div>
      {/* <DataGrid /> */}
    </div>
  );
}

export default App;
