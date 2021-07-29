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
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ol>
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
