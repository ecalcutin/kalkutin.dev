import Side from "components/Side";
import React, { Fragment } from "react";

import styles from "./styles.less";
import icons from "./icons";

const Social = () => {
  return (
    <Fragment>
      <Side orientation="left">
        <ul className={styles.socialList}>
          {icons.map(({ url, icon, title }, index) => (
            <li key={index}>
              <a title={title} aria-label={title} href={url}>
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </Side>
    </Fragment>
  );
};

export default Social;
