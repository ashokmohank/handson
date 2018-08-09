import React from "react";
class GetInfo extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Get Information</h1>

        <p>
          <strong>Params : </strong>
          {this.props.match.params.id}
        </p>
        <p>
          <strong>Prop test attr1: </strong>
          {this.props.attr1}
        </p>
      </div>
    );
  }
}

export default GetInfo;
