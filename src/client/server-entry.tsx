import React from 'react';
import { renderToString } from 'react-dom/server';

import { App } from './App';

export default () => renderToString(React.createElement(App));
