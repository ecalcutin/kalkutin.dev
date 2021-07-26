import React, { Fragment } from "react";

import Hero from "components/sections/Hero";
import About from "components/sections/About";
import Experiece from "components/sections/Experience";
import Contact from "components/sections/Contact";

const HomePage = () => {
  return (
    <Fragment>
      <main className="fillHeight">
        <Hero />
        <About />
        <Experiece />
        <Contact />
      </main>
    </Fragment>
  );
};

export default HomePage;
