import React from "react";

const Layout = (props: any) => {
  return (
    <div>
      <div>Layout</div>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
