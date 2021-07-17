import React, { Fragment } from "react";
import Email from "../Email";
import Nav from "../Nav";
import Social from "../Social";
import styles from "./styles.less";

const Layout = (props: any) => {
  console.log(styles); // undefined
  return (
    <Fragment>
      <div className={styles.content}>
        <Nav />
        <Social />
        <Email />
      </div>
    </Fragment>
  );
};

export default Layout;
