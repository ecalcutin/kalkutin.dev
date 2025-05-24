import React from 'react';

import styles from './hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h1>Hi, my name is</h1>
      <h2>Evgenii Kalkutin.</h2>
      <h3>I build things for the web.</h3>
      <p>
        I&apos;m a certified Node.js{' '}
        <a
          target='_blank'
          title='JSNAD: OpenJS Node.js Application Developer'
          href='https://www.credly.com/badges/486a76a8-4bc3-40d7-bd63-30f77c68fbca/linked_in_profile'
          rel='noreferrer'
        >
          JSNAD
        </a>{' '}
        &amp;{' '}
        <a
          target='_blank'
          title='JSNSD: OpenJS Node.js Services Developer'
          href='https://www.credly.com/badges/b92c0c45-0604-4321-b696-607bb508d1c8?source=linked_in_profile'
          rel='noreferrer'
        >
          JSNSD
        </a>{' '}
        Javascript engineer specializing in building exceptional digital
        experiences.
      </p>
    </section>
  );
};
