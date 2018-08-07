import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const spmDiv = document.getElementById("app");
ReactDOM.render(
  <div>
    <App colors={["red", "green", "blue"]} />
  </div>,
  spmDiv
);
