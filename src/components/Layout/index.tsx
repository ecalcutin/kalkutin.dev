import React, { Fragment } from "react";

import Footer from "components/Footer";

import styles from "./styles.less";

type LayoutProps = {
  children: any;
};

const Layout = (props: LayoutProps) => {
  return (
    <Fragment>
      <div className={styles.layout}>
        <div id="content">
          {props.children}
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
