import React from "react";
import Header from "./components/top-content/Header";
import Middle from "./components/middle-content/Middle";
import Navigation from "./components/top-content/Navigation";
import Projects from "./components/end-content/Projects";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="about">
        <Middle />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}

export default App;
