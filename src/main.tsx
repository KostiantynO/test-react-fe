import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';
import './index.css';

const root = document.getElementById('root');

if (!root) throw new Error('Please add div id root');

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
