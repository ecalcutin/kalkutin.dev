import React, { Fragment, useLayoutEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { LOADER_DELAY } from "config/utils";
import email from "config/social/email";

import { StyledHeroSection } from "./styles";
import { useState } from "react";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(null);

  useLayoutEffect(() => {
    setIsMounted(true);
  });

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Evgenii Kalkutin.</h2>;
  const three = <h3 className="big-heading">I build things for the web.</h3>;
  const four = (
    <p>
      I'm a certified Node.js{" "}
      <a
        target="_blank"
        title="JSNAD: OpenJS Node.js Application Developer"
        href="https://www.credly.com/badges/486a76a8-4bc3-40d7-bd63-30f77c68fbca/linked_in_profile"
      >
        JSNAD
      </a>{" "}
      &amp;{" "}
      <a
        target="_blank"
        title="JSNSD: OpenJS Node.js Services Developer"
        href="https://www.credly.com/badges/b92c0c45-0604-4321-b696-607bb508d1c8?source=linked_in_profile"
      >
        JSNSD
      </a>{" "}
      Javascript engineer specializing in building exceptional digital
      experiences.
    </p>
  );
  const five = (
    <a href={`mailto:${email}`} className="email-link">
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <Fragment>
      <StyledHeroSection>
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={LOADER_DELAY}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </StyledHeroSection>
    </Fragment>
  );
};

export default Hero;
