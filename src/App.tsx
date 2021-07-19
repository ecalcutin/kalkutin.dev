import React, { lazy, Suspense } from "react";

const IndexPage = lazy(() => import("./pages/IndexPage"));

const App = () => {
  return (
    <div>
      <div>
        <Suspense fallback={<div />}>
          <IndexPage />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
