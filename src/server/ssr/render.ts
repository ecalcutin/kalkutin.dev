import fs from 'node:fs';
import path from 'node:path';

import renderToString from 'client/server-entry';

const render = () => {
  const htmlPath = path.resolve(process.cwd(), 'build', 'client', 'index.html');
  const rendered = renderToString();
  const html = fs.readFileSync(htmlPath, { encoding: 'utf-8' });
  return html.replace(
    '<div id="root"></div>',
    `<div id="root">${rendered}</div>`,
  );
};

export default render;
