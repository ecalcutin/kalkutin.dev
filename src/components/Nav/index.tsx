import React from "react";

import styles from "./styles.less";

const Nav = (props: any) => {
  return (
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
          <div className={""}></div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
