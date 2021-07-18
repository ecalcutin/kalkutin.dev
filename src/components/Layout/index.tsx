import React, { Fragment } from "react";
import Email from "../Email";
import Nav from "../Nav";
import Social from "../Social";
import styles from "./styles.less";

type LayoutProps = {
  children: any;
};

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <Fragment>
      <div className={styles.content}>
        <Nav />
        <Social />
        <Email />
        <div id="content">{children}</div>
      </div>
    </Fragment>
  );
};

export default Layout;
