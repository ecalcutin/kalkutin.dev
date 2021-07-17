import React from "react";
import clsx from "clsx";

import styles from "./styles.less";

type SideProps = {
  orientation: "left" | "right";
  children: any;
};

const Side = (props: SideProps) => {
  const { orientation , children} = props;
  return (
    <aside className={clsx([styles.aside, styles[orientation]])}>
      {children}
    </aside>
  );
};

export default Side;
