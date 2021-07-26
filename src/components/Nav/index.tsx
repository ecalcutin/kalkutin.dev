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
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              {/* <li>
                <a href="#">Work</a>
              </li> */}
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ol>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Nav;
