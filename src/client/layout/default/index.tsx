import React, { PropsWithChildren } from 'react';

import { Header } from 'client/components/Header';

type Props = {} & PropsWithChildren;

export const DefaultLayout: React.FC<Props> = props => {
  const { children } = props;

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
