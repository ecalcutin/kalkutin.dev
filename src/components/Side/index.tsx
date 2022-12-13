import React from 'react';

import { StyledSideElement } from './styles';

type SideProps = {
  orientation: 'left' | 'right';
  children: React.ReactElement;
};

const Side = (props: SideProps) => {
  const { orientation, children } = props;

  return (
    <StyledSideElement orientation={orientation}>{children}</StyledSideElement>
  );
};

export default Side;
