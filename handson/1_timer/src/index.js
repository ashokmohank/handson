import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const spmDiv = document.getElementById("app");
ReactDOM.render(
  <div>
    <App tz="en-US" />
    <App tz="ar-EG" />
  </div>,
  spmDiv
);
