import React, { type PropsWithChildren, StrictMode } from 'react';

import 'client/styles/index.css';

type Props = {} & PropsWithChildren;

export const App: React.FC<Props> = props => {
  return <StrictMode>{props.children}</StrictMode>;
};
