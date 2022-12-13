import React from 'react';

import JSNAD from 'assets/images/certificates/jsnad.png';
import JSNSD from 'assets/images/certificates/jsnsd.png';
import AWSCP from 'assets/images/certificates/aws-cp.png';

import { StyledCertificationsSection } from './styles';

const Certifications = () => {
  return (
    <StyledCertificationsSection id='certifications'>
      <h2 className='numbered-heading overline'>Certifications</h2>
      <h2 className='title'>Achievements</h2>
      <div className='flex-container'>
        <a
          target='_blank'
          title='JSNAD: OpenJS Node.js Application Developer'
          href='https://www.credly.com/badges/486a76a8-4bc3-40d7-bd63-30f77c68fbca/public_url'
          rel='noreferrer'
        >
          <img alt='JSNAD: OpenJS Node.js Application Developer' src={JSNAD} />
        </a>
        <a
          target='_blank'
          title='JSNSD: OpenJS Node.js Services Developer'
          href='https://www.credly.com/badges/b92c0c45-0604-4321-b696-607bb508d1c8/public_url'
          rel='noreferrer'
        >
          <img alt='JSNSD: OpenJS Node.js Services Developer' src={JSNSD} />
        </a>
        <a
          target='_blank'
          title='AWS Certified Cloud Practitioner'
          href='https://www.credly.com/badges/9fec42e6-743a-47e8-a1a4-a395a68456a9/public_url'
          rel='noreferrer'
        >
          <img alt='AWS Certified Cloud Practitioner' src={AWSCP} />
        </a>
      </div>
    </StyledCertificationsSection>
  );
};

export default Certifications;
