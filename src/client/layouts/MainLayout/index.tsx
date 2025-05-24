import React, { PropsWithChildren } from 'react';

import { Header } from 'client/components/Header';

type Props = PropsWithChildren;

export const MainLayout: React.FC<Props> = props => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
    </div>
  );
};
