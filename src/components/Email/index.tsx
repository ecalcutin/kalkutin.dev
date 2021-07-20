import Side from "components/Side";
import React, { Fragment } from "react";

import styles from "./styles.less";

const Email = () => {
  return (
    <Fragment>
      <Side orientation="right">
        <div className={styles.email}>
          <a href="mailto:evgheni.calcutin@gmail.com">
            evgheni.calcutin@gmail.com
          </a>
        </div>
      </Side>
    </Fragment>
  );
};

export default Email;
