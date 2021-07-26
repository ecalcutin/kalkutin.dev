import React, { useState } from "react";
import clsx from "clsx";

import styles from "./styles.less";

import jobs from "./experiences";

const Experiece = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  return (
    <section id="experience" className={styles.experience}>
      <h2 className="numbered-heading">Where I’ve Worked</h2>
      <div className={styles.inner}>
        <div role="tablist" className={styles.tabList}>
          {jobs.map(({ company }, index) => (
            <button
              id={`tab-${index}`}
              tabIndex={activeTabId === index ? 0 : -1}
              key={index}
              role="tab"
              className={clsx([
                styles.tabButton,
                activeTabId === index && styles.active,
              ])}
              onClick={() => setActiveTabId(index)}
            >
              <span>{company}</span>
            </button>
          ))}
          <div
            style={{
              transform: `translateY(${activeTabId * 42}px)`,
            }}
            className={clsx([styles.highlight])}
          ></div>
        </div>
        <div className={styles.tabPanels}>
          {jobs.map(
            (
              { company, position, dateRange, url, description, achievements },
              index
            ) => {
              return (
                <div
                  id={`panel-${index}`}
                  role="tabpanel"
                  key={index}
                  className={styles.tabPanel}
                  hidden={activeTabId !== index}
                >
                  <h3>
                    <span>{position}</span>
                    <span className={styles.company}>
                      &nbsp;@&nbsp;
                      <a href={url} target="_blank" className="inline-link">
                        {company}
                      </a>
                    </span>
                  </h3>
                  <p className={styles.range}>{dateRange}</p>
                  <div>
                    <p>{description}</p>
                    {achievements && (
                      <ul>
                        {achievements.map((value, index) => (
                          <li key={index}>{value}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Experiece;
