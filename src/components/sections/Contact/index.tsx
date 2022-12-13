import React from 'react';

import email from 'config/social/email';

import { StyledContactSection } from './styles';

const Contact = () => {
  return (
    <StyledContactSection id='contact'>
      <h2 className='numbered-heading overline'>What’s Next?</h2>

      <h2 className='title'>Get In Touch</h2>

      <p>
        Although I&apos;m not currently looking for any new opportunities, my
        inbox is always open. Whether you have a question or just want to say
        hi, I&apos;ll try my best to get back to you!
      </p>

      <a className='email-link' href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
