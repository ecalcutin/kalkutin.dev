import renderer from "react-test-renderer";

import Social from "./index";

describe("Social links", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Social />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
