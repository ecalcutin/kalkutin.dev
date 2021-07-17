import React from "react";
import Layout from "../../components/Layout";

import styles from "./styles.less";

const IndexPage = () => {
  return (
    <div>
      <div>Index page</div>
      {/* <Layout>Inside layout</Layout> */}
      <div className={styles.navy}>hellos</div>
      <div className={styles.darken}>hellos</div>
    </div>
  );
};

export default IndexPage;
