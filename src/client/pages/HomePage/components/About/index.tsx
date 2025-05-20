import React from 'react';

import { Section } from 'client/components/ui/Section';

export const About: React.FC = () => {
  return (
    <Section id='about' title='About me'>
      <div>
        <div>
          <p>
            Hello! My name is Evgenii and I enjoy creating things that live on
            the internet. My interest in web development started back in 2013
            when I decided to try making personal blog — turns out hacking
            together a custom reblog button taught me a lot about HTML &amp;
            CSS!
          </p>
          <p>
            Here are a few technologies I&apos;ve been working with recently:
          </p>
        </div>
        <div>Picture</div>
      </div>
    </Section>
  );
};
