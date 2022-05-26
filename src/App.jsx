import React from "react";
import Header from "./components/top-content/Header";
import Middle from "./components/middle-content/Middle";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <Middle />
    </div>
  );
}

export default App;
