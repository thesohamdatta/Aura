import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {Theme} from '@astryxdesign/core/theme';
import {auraTheme} from './theme/auraTheme';
import '@astryxdesign/core/reset.css';
import '@astryxdesign/theme-neutral/theme.css';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme theme={auraTheme} mode="light">
      <App />
    </Theme>
  </StrictMode>,
);
