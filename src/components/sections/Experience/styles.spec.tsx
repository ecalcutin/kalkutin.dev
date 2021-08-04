import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { theme } from "../../../theme";

import Experience from "./index";

describe("Experience section", () => {
  it("should render correctly", () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <Experience />
      </ThemeProvider>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
