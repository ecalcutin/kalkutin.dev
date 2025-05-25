import fs from 'node:fs';
import path from 'node:path';

import renderToString from 'client/server-entry';

const render = () => {
  const htmlPath = path.resolve(process.cwd(), 'build', 'client', 'index.html');
  const cssPath = path.resolve(process.cwd(), 'build', 'client', 'main.css');

  const rendered = renderToString();
  const html = fs.readFileSync(htmlPath, { encoding: 'utf-8' });
  const css = fs.readFileSync(cssPath, { encoding: 'utf-8' });

  // Replace the root div with the server-rendered content
  return html
    .replace('</head>', `<style>${css}</style>`)
    .replace('<div id="root"></div>', `<div id="root">${rendered}</div>`);
};

export default render;
