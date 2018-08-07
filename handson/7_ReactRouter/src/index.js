import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
const spmDiv = document.getElementById("app");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  spmDiv
);
