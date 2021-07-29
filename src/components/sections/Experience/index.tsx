import React, { useState } from "react";

import {
  StyledHighlight,
  StyledJobsSection,
  StyledTabButton,
  StyledTabList,
  StyledTabPanel,
  StyledTabPanels,
} from "./styles";

import experience from "config/social/experience";

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);

  return (
    <StyledJobsSection id="experience">
      <h2 className="numbered-heading">Where I’ve Worked</h2>

      <div className="inner">
        <StyledTabList role="tablist" aria-label="Job tabs">
          {experience &&
            experience.map(({ company }, i) => {
              return (
                <StyledTabButton
                  key={i}
                  isActive={activeTabId === i}
                  onClick={() => setActiveTabId(i)}
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={activeTabId === i ? 0 : -1}
                  aria-selected={activeTabId === i ? true : false}
                  aria-controls={`panel-${i}`}
                >
                  <span>{company}</span>
                </StyledTabButton>
              );
            })}
          <StyledHighlight activeTabId={activeTabId} />
        </StyledTabList>

        <StyledTabPanels>
          {experience &&
            experience.map(
              (
                {
                  company,
                  achievements,
                  dateRange,
                  description,
                  position,
                  url,
                },
                i
              ) => {
                return (
                  <StyledTabPanel
                    key={i}
                    id={`panel-${i}`}
                    role="tabpanel"
                    tabIndex={activeTabId === i ? 0 : -1}
                    aria-labelledby={`tab-${i}`}
                    aria-hidden={activeTabId !== i}
                    hidden={activeTabId !== i}
                  >
                    <h3>
                      <span>{position}</span>
                      <span className="company">
                        &nbsp;@&nbsp;
                        <a href={url} className="inline-link">
                          {company}
                        </a>
                      </span>
                    </h3>

                    <p className="range">{dateRange}</p>
                    <div>
                      <p>{description}</p>
                    </div>
                    <div style={{ marginTop: 24 }}>
                      <ul>
                        {achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </StyledTabPanel>
                );
              }
            )}
        </StyledTabPanels>
      </div>
    </StyledJobsSection>
  );
};

export default Experience;
