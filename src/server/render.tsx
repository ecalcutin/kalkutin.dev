import path from 'node:path';
import fs from 'node:fs';

import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import App from '../App';

const render = async () => {
  return new Promise((resolve, reject) => {
    const css = new ServerStyleSheet();
    const html = path.resolve('./build/index.html');
    const rendered = renderToString(
      <StyleSheetManager sheet={css.instance}>
        <App />
      </StyleSheetManager>
    );
    const styleTags = css.getStyleTags();
    css.seal();
    fs.readFile(html, 'utf8', (err, html) => {
      if (err) {
        reject(err);
      }
      resolve(
        html
          .replace(/<\/head>/, `${styleTags}</head>`)
          .replace('<div id="root"></div>', `<div id="root">${rendered}</div>`)
      );
    });
  });
};

export default render;
