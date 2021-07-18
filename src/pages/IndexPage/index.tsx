import React from "react";

import Layout from "../../components/Layout";
import Hero from "../../sections/Hero";

import styles from "./styles.less";

const IndexPage = () => {
  return (
    <Layout>
      <main className={styles.heroWrapper}>
        <Hero />
      </main>
    </Layout>
  );
};

export default IndexPage;
