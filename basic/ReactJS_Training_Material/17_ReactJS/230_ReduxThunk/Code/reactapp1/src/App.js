import React from "react";
import axios from "axios";

import Display from "./Display";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        login: "",
        name: "",
        company: "",
        bio: "",
        followers: "",
      },
      error: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    axios
      .get("https://api.github.com/users/gaearon100")
      .then(response => {
        this.setState({
          data: {
            login: response.data.login,
            name: response.data.name,
            company: response.data.company,
            bio: response.data.bio,
            followers: response.data.followers,
          },
        });
        console.log(response.data);
      })
      .catch(error => {
        this.setState({
          error,
        });
        console.log(error);
      });
    ev.preventDefault();
  }

  render() {
    return (
      <div>
        <form>
          <button type="button" onClick={this.handleClick}>
            Fetch Details
          </button>
        </form>
        <br />
        <br />
        <br />
        <Display data={this.state.data} />
      </div>
    );
  }
}

export default App;
