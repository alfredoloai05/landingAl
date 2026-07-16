import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactLenis
      root
      options={{
        autoRaf: true,
        anchors: { offset: -72 },
        lerp: 0.075,
        smoothWheel: true,
        wheelMultiplier: 0.9,
      }}
    />
    <App />
  </StrictMode>,
);
