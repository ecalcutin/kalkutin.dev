import { createRoot } from 'react-dom/client';

import { App } from './App';
import 'client/styles/global.css';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
