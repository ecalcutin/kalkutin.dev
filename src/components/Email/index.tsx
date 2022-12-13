import React from 'react';

import email from 'config/social/email';
import Side from 'components/Side';

import { StyledLinkWrapper } from './styles';

const Email = () => (
  <Side orientation='right'>
    <StyledLinkWrapper>
      <a href={`mailto:${email}`}>{email}</a>
    </StyledLinkWrapper>
  </Side>
);

export default Email;
