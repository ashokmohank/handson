import React from "react";
import ReactDOM from "react-dom";
import Red from "./Red";
const divStyleRed = { color: "red" };
const divStyleBlack = { color: "black" };

//Class Component

class LightBlueC extends React.Component {
  render() {
    let section = this.props.title;
    const jsx1 = (
      <div>
        <h2>{this.props.title}</h2>
        <Red sportname="Football" price="$49.99" highlight={divStyleBlack} />
        <Red price="$9.99" highlight={divStyleBlack} />
        <Red sportname="BasketBall" price="$29.99" highlight={divStyleRed} />
      </div>
    );
    const jsx2 = (
      <div>
        <h2>{this.props.title}</h2>
        <Red sportname="iPod Touch" price="$99.99" highlight={divStyleBlack} />
        <Red sportname="iPhone 5" price="$399.99" highlight={divStyleRed} />
        <Red sportname="Nexus 7" price="$199.99" highlight={divStyleBlack} />
      </div>
    );
    if (section === "Sporting Goods") {
      return jsx1;
    } else if (section === "Electronics") {
      return jsx2;
    }
  }
}
class GreenC extends React.Component {
  render() {
    return (
      <div>
        <h1>Name Price</h1>
        <LightBlueC title="Sporting Goods" />
        <LightBlueC title="Electronics" />
      </div>
    );
  }
}
class BlueC extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />Only Show Product in Stock
        </p>
      </div>
    );
  }
}
class OrangeC extends React.Component {
  render() {
    return (
      <div>
        <BlueC />
        <GreenC />
      </div>
    );
  }
}

//Static method
Red.defaultProps = {
  sportname: "defaulted Name"
};

ReactDOM.render(<OrangeC />, document.getElementById("app"));
