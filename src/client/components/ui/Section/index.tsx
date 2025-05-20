import React, { Fragment, PropsWithChildren } from 'react';

type Props = {
  readonly id: string;
  readonly title: string;
} & PropsWithChildren;

export const Section: React.FC<Props> = props => {
  return (
    <section id={props.id}>
      <h2>{props.title}</h2>
      <Fragment>{props.children}</Fragment>
    </section>
  );
};
