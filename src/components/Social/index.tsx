import Side from "components/Side";
import React, { Fragment } from "react";

import styles from "./styles.less";

type SocialProps = {};

const Social = (props: SocialProps) => {
  return (
    <Fragment>
      <Side orientation="left">Social</Side>
    </Fragment>
  );
};

export default Social;
