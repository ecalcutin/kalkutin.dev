import React, { useState } from 'react';

import { Section } from 'client/components/Section';

import { ExperienceTabList } from './components/ExperienceTabList';
import { ExperienceTabPanels } from './components/ExperienceTabPanels';
import { experiences } from './experience';
import styles from './styles.module.css';

export const Experience: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<number>(0);

  return (
    <Section id='experience' title='Experience'>
      <div className={styles.container}>
        <ExperienceTabList
          onClick={setActiveTabId}
          activeIndex={activeTabId}
          items={experiences.map(e => e.company)}
        />
        <ExperienceTabPanels
          activeTabPanel={activeTabId}
          experiences={experiences}
        />
      </div>
    </Section>
  );
};
