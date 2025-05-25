import clsx from 'clsx';
import React from 'react';

type Props = {
  readonly items: Array<string>;
  readonly activeIndex: number;
  readonly onClick: (index: number) => void;
};

import styles from './styles.module.css';

export const ExperienceTabList: React.FC<Props> = props => {
  const { items, onClick } = props;

  const handleClick = (index: number): void => {
    onClick(index);
  };

  return (
    <div role='tablist' aria-label='Job tabs' className={styles.container}>
      {items.map((item, index) => {
        return (
          <button
            className={clsx(styles.button, {
              [styles.active!]: props.activeIndex === index,
            })}
            role='tab'
            key={index}
            onClick={() => handleClick(index)}
          >
            {item}
          </button>
        );
      })}
      <div
        className={styles.highlight}
        style={
          {
            '--translate-x': `calc(${props.activeIndex} * var(--tab-width))`,
            '--translate-y': `calc(${props.activeIndex} * var(--tab-height))`,
          } as React.CSSProperties
        }
      />
    </div>
  );
};
