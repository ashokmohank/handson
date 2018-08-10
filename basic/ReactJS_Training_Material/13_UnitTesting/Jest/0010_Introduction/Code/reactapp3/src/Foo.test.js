import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Foo from "./Foo";

//Configure Enzyme
Enzyme.configure({ adapter: new Adapter() });

describe("Test suite", function () {
  it("should render without throwing an error", function () {
    expect(
      Enzyme.shallow(<Foo />).contains(<div className="foo">Bar</div>)
    ).toBe(true);
  });

  it('should be selectable by class "foo"', function () {
    expect(Enzyme.shallow(<Foo />).is(".foo")).toBe(true);
  });

  it("should mount in a full DOM", function () {
    expect(Enzyme.mount(<Foo />).find(".foo").length).toBe(1);
  });

  it("should render to static HTML", function () {
    expect(Enzyme.render(<Foo />).text()).toEqual("Bar");
  });
});
