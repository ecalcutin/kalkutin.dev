import React from "react";

import styles from "./styles.less";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Hi, my name is</h1>
      <h2>Evgheni Calcutin.</h2>
      <h3>I build things for the web.</h3>
      <p>
        I'm a certified Node.js (JSNAD/JSNSD) &amp; Javascript engineer
        specializing in building exceptional digital experiences.
      </p>
      <a className={styles.emailLink} href="mailto:evgheni.calcutin@gmail.com">
        Get in Touch
      </a>
    </section>
  );
};

export default Hero;
