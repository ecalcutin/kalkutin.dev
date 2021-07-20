import React, { Fragment } from "react";

import styles from "./styles.less";

const Nav = () => {
  return (
    <Fragment>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div id="logo" />
          <div className={styles.links}>
            <ol>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Experience</a>
              </li>
              <li>
                <a>Work</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ol>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Nav;
