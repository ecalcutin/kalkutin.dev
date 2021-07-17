import React from "react";
import Side from "../Side";

import styles from "./styles.less";
import socialIcons from "./icons";

type SocialProps = {};

const Social = (props: SocialProps) => {
  return (
    <Side orientation="left">
      <ul className={styles.socialList}>
        {socialIcons.map(({ name, url, icon }, index) => (
          <li key={index}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </Side>
  );
};

export default Social;
