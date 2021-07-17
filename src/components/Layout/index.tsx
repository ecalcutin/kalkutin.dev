import React, { Fragment } from "react";
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
      </div>
    </Fragment>
  );
};

export default Layout;
