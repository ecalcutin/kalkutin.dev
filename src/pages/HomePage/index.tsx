import React, { Fragment } from "react";

import Hero from "components/sections/Hero";
import About from "components/sections/About";

const HomePage = () => {
  return (
    <Fragment>
      <main className="fillHeight">
        <Hero />
        <About />
      </main>
    </Fragment>
  );
};

export default HomePage;
