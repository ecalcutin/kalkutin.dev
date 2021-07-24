import React from "react";

import styles from "./styles.less";

import jobs from "./experiences";

const Experiece = () => {
  return (
    <section id="experience" className={styles.experience}>
      <h2 className="numbered-heading">Where I’ve Worked</h2>
      <div className={styles.inner}>
        <div role="tablist" className={styles.tabList}>
          {jobs.map(({ company }, index) => (
            <button key={index} role="tab" className={styles.tabButton}>
              <span>{company}</span>
            </button>
          ))}
          <div className={styles.highlight}></div>
        </div>
        <div className={styles.tabPanels}>
          {jobs.map(({ company, position, dateRange, url }, index) => {
            return (
              <div key={index} className={styles.tabPanel}>
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
                  <ul>
                    <li>
                      Development of a rich money exchange platform (Travelex)
                      combining complex UI & business logic. The application
                      makes use of KYC, sending money abroad, withdrawal,
                      internal back office management.
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experiece;
