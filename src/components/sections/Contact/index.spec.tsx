import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import { theme } from "../../../theme";

import Contact from "./index";

describe("Contact section", () => {
  it("should render correctly", () => {
    const tree = renderer.create(
      <ThemeProvider theme={theme}>
        <Contact />
      </ThemeProvider>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
