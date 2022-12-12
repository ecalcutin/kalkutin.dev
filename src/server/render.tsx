import path from "node:path";
import fs from "node:fs";

import { renderToString } from "react-dom/server";

import App from "../App";

const render = async () => {
  return new Promise((resolve, reject) => {
    const html = path.resolve("./build/index.html");
    const rendered = renderToString(<App />);

    fs.readFile(html, "utf8", (err, html) => {
      if (err) {
        reject(err);
      }
      resolve(
        html.replace(
          '<div id="root"></div>',
          `<div id="root">${rendered}</div>`
        )
      );
    });
  });
};

export default render;
