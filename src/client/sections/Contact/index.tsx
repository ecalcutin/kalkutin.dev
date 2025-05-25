import React from 'react';

import { Section } from 'client/components/Section';

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
        <p className={styles.contact}>
          <a className='email-link' href={`mailto:evgheni.calcutin@gmail.com`}>
            {/* <Button> Say Hello</Button> */}
          </a>
        </p>
      </div>
    </Section>
  );
};
