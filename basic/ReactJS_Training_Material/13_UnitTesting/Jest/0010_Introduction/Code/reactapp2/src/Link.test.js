import React from "react";
import Link from "./Link";
import renderer from "react-test-renderer";

describe("Testing <Link/>", () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );

  test("Component loads", () => {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Style changes on onMouseEnter", () => {
    // manually trigger the callback
    let tree = component.toJSON();
    tree.props.onMouseEnter();

    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Style reverts to original on onMouseLeave", () => {
    // manually trigger the callback
    let tree = component.toJSON();
    tree.props.onMouseLeave();

    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
