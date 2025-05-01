import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ClockApp from './ClockApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClockApp />
  </StrictMode>,
)
