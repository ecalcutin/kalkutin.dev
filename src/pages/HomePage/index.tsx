import React, { Fragment } from "react";

import Hero from "components/sections/Hero";
import About from "components/sections/About";
import Experiece from "components/sections/Experience";

const HomePage = () => {
  return (
    <Fragment>
      <main className="fillHeight">
        <Hero />
        <About />
        <Experiece />
      </main>
    </Fragment>
  );
};

export default HomePage;
