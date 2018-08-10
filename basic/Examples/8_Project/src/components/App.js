import React from "react";

import HeaderContainer from "../containers/HeaderContainer";
import FormContainer from "../containers/FormContainer";
import ListContainer from "../containers/ListContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <FormContainer />
        <ListContainer />
      </div>
    );
  }
}

export default App;
