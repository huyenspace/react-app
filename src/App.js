import React from "react";
import "./App.css";
import Weather from "./Weather.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
        <h6>
          <a href="#">Open-source code</a> by Huyen Nguyen
        </h6>
      </header>
    </div>
  );
}

export default App;