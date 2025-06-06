import React from 'react';

import { Button } from 'client/components/Button';
import { Section } from 'client/components/Section';
import { EMAIL } from 'client/constants/email';

import styles from './contact.module.css';

export const Contact: React.FC = () => {
  return (
    <Section id='contact' title='Get In Touch' overline="What's next?">
      <div className={styles.contact}>
        <p className={styles.content}>
          Although I&apos;m not currently looking for any new opportunities, my
          inbox is always open. Whether you have a question or just want to say
          hi, I&apos;ll try my best to get back to you!
        </p>
        <p className={styles.contactButton}>
          <a href={`mailto:${EMAIL}`}>
            <Button>Say Hello</Button>
          </a>
        </p>
      </div>
    </Section>
  );
};
