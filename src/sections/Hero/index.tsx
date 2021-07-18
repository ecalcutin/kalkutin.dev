import React from "react";

import styles from "./styles.less";

const Hero = () => {
  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Evgheni Calcutin.</h2>;
  const three = <h3 className="big-heading">I build things for the web.</h3>;
  const four = (
    <p>
      I'm a certified Node.js (JSNAD/JSNSD) &amp; Javascript engineer
      specializing in building exceptional digital experiences. 
    </p>
  );
  const five = (
    <a href={`mailto:evgheni.calcutin@gmail.com`} className={styles.emailLink}>
      Get In Touch
    </a>
  );

  const items = [one, two, three, four, five];
  return (
    <section className={styles.section}>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </section>
  );
};

export default Hero;
