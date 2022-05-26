import React from "react";
import Header from "./components/top-content/Header";
import Middle from "./components/middle-content/Middle";
import Navigation from "./components/top-content/Navigation";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="about">
        <Middle />
      </section>
    </div>
  );
}

export default App;
