import React, { Fragment } from "react";

import Social from "components/Social";

import styles from "./styles.less";

type LayoutProps = {
  children: any;
};

const Layout = (props: LayoutProps) => {
  return (
    <Fragment>
      <div className={styles.layout}>
        <Social />
        <div id="content">{props.children}</div>
      </div>
    </Fragment>
  );
};

export default Layout;
