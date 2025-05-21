import React from 'react';

import styles from './styles.module.css';

type Props = {
  readonly activeTabIndex: number;
};

export const Highlight: React.FC<Props> = () => {
  return <div className={styles.container}></div>;
};
