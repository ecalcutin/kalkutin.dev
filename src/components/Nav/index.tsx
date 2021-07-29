import React from "react";

import { StyledHeader, StyledLinks, StyledNav } from "./styles";

const Nav = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <div id="logo"></div>
        <StyledLinks>
          <ol>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#about">Experience</a>
            </li>
            <li>
              <a href="#about">Work</a>
            </li>
          </ol>
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
