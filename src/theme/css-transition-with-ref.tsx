import React, { cloneElement, ReactElement, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

type Props = CSSTransitionProps & {
  readonly children: ReactElement<any>;
};

export const CSSTransitionWithRef: React.FC<Props> = props => {
  const { children, ...restProps } = props;

  const ref = useRef<HTMLElement>(null);

  const setRef = (value: HTMLElement | null): void => {
    ref.current = value;
  };

  return (
    // @ts-ignore
    <CSSTransition nodeRef={ref} {...restProps}>
      {cloneElement(children, { ref: setRef })}
    </CSSTransition>
  );
};
