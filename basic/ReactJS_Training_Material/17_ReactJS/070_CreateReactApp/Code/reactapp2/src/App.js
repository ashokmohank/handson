import React from "react";
import Section from "./Section";

class App extends React.Component {
  render() {
    const val = "testdiv";

    return (
      <div id={val}>
        <h1>Hello World! {jsx}</h1>
        <Section />
      </div>
    );
  }
}

export default App;
