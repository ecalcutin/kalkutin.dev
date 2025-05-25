import clsx from 'clsx';
import React from 'react';

import styles from './picture.module.css';

type Props = {
  readonly src: string;
  readonly alt?: string;
  readonly className?: string;
};

export const Picture: React.FC<Props> = props => {
  return (
    <div className={clsx(styles.wrapper, props.className)}>
      <img src={props.src} width={300} height={300} alt={props.alt} />
    </div>
  );
};
