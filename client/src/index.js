import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
  } from "react-router-dom";

ReactDOM.render(
    <Router>
        <App />
     </Router>
, document.getElementById("root"));


let time = new Date().toLocaleTimeString();
console.log(time);

