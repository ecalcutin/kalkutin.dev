import React, { Fragment } from "react";
import clsx from "clsx";

import styles from "./styles.less";

type LayoutProps = {
  orientation: "left" | "right";
  children: any;
};

const Side = (props: LayoutProps) => {
  const { orientation, children } = props;
  return (
    <Fragment>
      <aside className={clsx([styles.aside, styles[orientation]])}>
        {children}
      </aside>
    </Fragment>
  );
};

export default Side;
