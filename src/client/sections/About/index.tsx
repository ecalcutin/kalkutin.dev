import React from 'react';

import { Section } from 'client/components/Section';

import profilePic from '../../assets/images/profile.webp';

import styles from './about.module.css';
import { Picture } from './components/Picture';

export const About: React.FC = () => {
  return (
    <Section title='About Me'>
      <div className={styles.about}>
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
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <Picture
          className={styles.pic}
          src={profilePic}
          alt='Evgenii Kalkutin profile photo'
        />
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
