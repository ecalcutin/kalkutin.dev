import React from "react";

import { StyledHeader, StyledLinks, StyledNav } from "./styles";
import IconLogo from "./logo";

const Logo = () => {
  return (
    <div className="logo" tabIndex={-1}>
      <a href="/">
        <IconLogo />
      </a>
    </div>
  );
};

const Nav = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <Logo />

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
