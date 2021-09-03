import React from "react";

import socialMedia from "config/social/social-media";
import { StyledCredit, StyledFooter, StyledSocialLinks } from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ title, icon, url }, i) => (
              <li key={i}>
                <a href={url} title={title}>
                  {icon}
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>

      <StyledCredit>
        <a href="https://github.com/ecalcutin/resume">
          <div>Designed &amp; Built by Evgenii Kalkutin</div>
        </a>
      </StyledCredit>
    </StyledFooter>
  );
};
export default Footer;
