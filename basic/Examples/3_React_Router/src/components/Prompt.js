import React from "react";
import { Prompt } from "react-router-dom";

class PromptDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>Prompt Demo</h1>
        <Prompt message="Do you really want to exit this page?" />
      </div>
    );
  }
}

export default PromptDemo;
