import React from 'react';

import AWSCP from 'client/assets/images/certificates/aws-cp.webp';
import JSNAD from 'client/assets/images/certificates/jsnad.webp';
import JSNSD from 'client/assets/images/certificates/jsnsd.webp';
import { Section } from 'client/components/Section';

import styles from './certifications.module.css';

export const Certifications: React.FC = () => {
  return (
    <Section id='certifications' title='Achievements' overline='Certifications'>
      <div className={styles.content}>
        <a
          target='_blank'
          title='JSNAD: OpenJS Node.js Application Developer'
          href='https://www.credly.com/badges/486a76a8-4bc3-40d7-bd63-30f77c68fbca/public_url'
          rel='noreferrer'
        >
          <img
            width={200}
            height={200}
            alt='JSNAD: OpenJS Node.js Application Developer'
            src={JSNAD}
          />
        </a>
        <a
          target='_blank'
          title='JSNSD: OpenJS Node.js Services Developer'
          href='https://www.credly.com/badges/b92c0c45-0604-4321-b696-607bb508d1c8/public_url'
          rel='noreferrer'
        >
          <img
            width={200}
            height={200}
            alt='JSNSD: OpenJS Node.js Services Developer'
            src={JSNSD}
          />
        </a>
        <a
          target='_blank'
          title='AWS Certified Cloud Practitioner'
          href='https://www.credly.com/badges/9fec42e6-743a-47e8-a1a4-a395a68456a9/public_url'
          rel='noreferrer'
        >
          <img
            height={200}
            alt='AWS Certified Cloud Practitioner'
            src={AWSCP}
          />
        </a>
      </div>
    </Section>
  );
};
