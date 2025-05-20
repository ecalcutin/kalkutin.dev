import React from 'react';

import styles from './styles.module.css';

type Props = {
  readonly src: string;
};

export const Picture: React.FC<Props> = props => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img src={props.src} width={300} height={300} alt='Evgenii Kalkutin' />
      </div>
    </div>
  );
};
