import React from 'react';

type Props = {
  readonly items: Array<string>;
  readonly activeIndex: number;
  readonly onClick: (index: number) => void;
};

export const ExperienceTabList: React.FC<Props> = props => {
  const { items, onClick } = props;

  const handleClick = (index: number): void => {
    onClick(index);
  };

  return (
    <div>
      {items.map((item, index) => {
        return (
          <button key={index} onClick={() => handleClick(index)}>
            {item}
          </button>
        );
      })}
    </div>
  );
};
