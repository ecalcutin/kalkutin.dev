import React from "react";

import Side from "../Side";

import styles from "./styles.less";

const Email = () => {
  return (
    <Side orientation="right">
      <div className={styles.email}>
        <a href="mailto:evgheni.calcutin@gmail.com">
          evgheni.calcutin@gmail.com
        </a>
      </div>
    </Side>
  );
};

export default Email;
