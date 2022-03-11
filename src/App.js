import logo from './logo.svg';
import './App.css';
import Child from "./Child";
import React from "react";

function App() {
  return (
    <div className="App">
      app
      <div>
        <ul>
          <li>111</li>
          <li>222</li>
        </ul>
      </div>
      <Child/>
    </div>
  );
}

export default App;
