import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { theme } from "../../../theme";

import About from "./index";

describe("About section", () => {
  it("should render correctly", () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <About />
      </ThemeProvider>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
