import React from 'react';

import Side from 'components/Side';
import socialMedia from 'config/social/social-media';

import { StyledSocialList } from './styles';

const Social = () => (
  <Side orientation='left'>
    <StyledSocialList>
      {socialMedia &&
        socialMedia.map(({ url, title, icon }, index) => (
          <li key={index}>
            <a title={title} href={url} target='_blank' rel='noreferrer'>
              {icon}
            </a>
          </li>
        ))}
    </StyledSocialList>
  </Side>
);

export default Social;
