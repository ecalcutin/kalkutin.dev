import React from "react";
import clsx from "clsx";

import styles from "./styles.less";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={clsx(["numbered-heading", styles.overline])}>
        What's Next?
      </h2>
      <h2 className={styles.title}>Get In Touch</h2>
      <p>
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </p>
      <a className={styles.emailLink} href="mailto:evgheni.calcutin@gmail.com">
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
