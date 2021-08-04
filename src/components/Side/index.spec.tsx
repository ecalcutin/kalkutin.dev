import renderer from "react-test-renderer";

import Side from "./index";

describe("Sidebar", () => {
  it("should render correctly on left", () => {
    const tree = renderer.create(<Side orientation="left">content</Side>);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("should render correctly on right", () => {
    const tree = renderer.create(<Side orientation="right">content</Side>);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
