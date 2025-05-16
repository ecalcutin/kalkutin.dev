// In production builds, React and ReactDOM should be loaded from CDN
import { hydrateRoot } from 'react-dom/client';

import { App } from './App';

hydrateRoot(document.getElementById('root')!, <App />);
