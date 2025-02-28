import React, { useLayoutEffect, useState } from 'react';
import { TransitionGroup } from 'react-transition-group';

import { LOADER_DELAY } from 'config/utils';
import { CSSTransitionWithRef } from 'theme/css-transition-with-ref';

import IconLogo from './logo';
import navLinks from './links';
import { StyledHeader, StyledLinks, StyledNav } from './styles';

const Logo: React.FC = () => {
  return (
    <div className='logo' tabIndex={-1}>
      <a aria-label='Main' href='/'>
        <IconLogo />
      </a>
    </div>
  );
};

const Nav = () => {
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    setIsMounted(true);
  });
  return (
    <StyledHeader>
      <StyledNav>
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransitionWithRef classNames={'fade'} timeout={LOADER_DELAY}>
              <Logo />
            </CSSTransitionWithRef>
          )}
        </TransitionGroup>

        <StyledLinks>
          <ol>
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks.map(({ name, url, target }, index) => (
                  <CSSTransitionWithRef
                    key={index}
                    timeout={LOADER_DELAY}
                    classNames='fadedown'
                  >
                    <li
                      key={index}
                      style={{ transitionDelay: `${index + 1}00ms` }}
                    >
                      <a target={(target && target) || '_self'} href={url}>
                        {name}
                      </a>
                    </li>
                  </CSSTransitionWithRef>
                ))}
            </TransitionGroup>
          </ol>
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
