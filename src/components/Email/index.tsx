import React from "react";

import { StyledLinkWrapper } from "./styles";

import email from "config/social/email";
import Side from "components/Side";

const Email = () => (
  <Side orientation="right">
    <StyledLinkWrapper>
      <a href={`mailto:${email}`}>{email}</a>
    </StyledLinkWrapper>
  </Side>
);

export default Email;
