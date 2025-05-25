import React from 'react';

import { Section } from 'client/components/Section';

import styles from './contacts.module.css';

export const Contacts: React.FC = () => {
  return (
    <Section>
      <div className={styles.contacts}></div>
    </Section>
  );
};
