import React from 'react';

import { Section } from 'client/components/ui/Section';

import profilePic from '../../../../../public/images/profile.webp';

import { Picture } from './components/Picture';
import styles from './styles.module.css';

export const About: React.FC = () => {
  return (
    <Section id='about' title='About me'>
      <div>
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

          <ul className={styles.skills}>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <Picture src={profilePic} />
      </div>
    </Section>
  );
};

const skills: Array<string> = [
  'Node.js',
  'JavaScript (ES6+)',
  'Typescript',
  'Nest.js',
  'MongoDB',
  'React',
  'Vue',
  'Angular',
  'RxJS',
  'Jest & Playwright',
  'Webpack',
  'Docker',
];
