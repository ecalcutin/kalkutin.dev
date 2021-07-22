import React from "react";

import ProfileImage from "assets/images/profile.jpg";
import styles from "./styles.less";

const About = () => {
  const skills = ["JavaScript (ES6+)", "React", "Node.js", "Cypress"];
  return (
    <section className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.inner}>
        <div>
          <p>
            Hello! My name is Evgheni and I enjoy creating things that live on
            the internet. My interest in web development started back in 2013
            when I decided to try making personal blog — turns out hacking
            together a custom reblog button taught me a lot about HTML &amp;
            CSS!
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className={styles.skillList}>
            {skills &&
              skills.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
        </div>
        <div className={styles.myPicture}>
          <div className={styles.wrapper}>
            <img src={ProfileImage} className={styles.img} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
