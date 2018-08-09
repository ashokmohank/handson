import React from "react";
class GetInfo extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Get Information</h1>
        <p>
          <strong>SearchString : </strong>
          {this.props.location.search}
        </p>
        <p>
          <strong>Params : </strong>
          {this.props.match.params.id}
        </p>
      </div>
    );
  }
}

export default GetInfo;
