import fs from 'node:fs';
import path from 'node:path';

import { renderToString } from 'react-dom/server';

import App from 'client/App';

const render = () => {
  const htmlPath = path.resolve(process.cwd(), 'src', 'public', 'index.html');
  const rendered = renderToString(App);
  const html = fs.readFileSync(htmlPath, { encoding: 'utf-8' });
  return html.replace('<!--SSR-->', rendered);
};

export default render;
