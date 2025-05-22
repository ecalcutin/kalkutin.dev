import React, { PropsWithChildren } from 'react';

type Experience = {
  readonly company: string;
  readonly position: string;
  readonly description: string;
  readonly achievements: Array<string>;
};

type Props = {
  readonly experiences: Array<Experience>;
  readonly activeTabPanel: number;
} & PropsWithChildren;

export const ExperienceTabPanels: React.FC<Props> = props => {
  const { experiences } = props;

  return (
    <div>
      {experiences.map((experience, index) => {
        const { company, position, description, achievements } = experience;

        return (
          <div hidden={props.activeTabPanel !== index} key={index}>
            <h3>
              <span>{position}</span>
              <span>{company}</span>
            </h3>

            <p>Jun 2020 - Jan 2021</p>
            <p>{description}</p>
            <ul>
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
