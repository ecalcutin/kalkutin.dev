import React, { Fragment, PropsWithChildren } from 'react';
import { Header } from 'web/components/Header';

type Props = {} & PropsWithChildren;

export const DefaultLayout: React.FC<Props> = props => {
  const { children } = props;

  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
};
