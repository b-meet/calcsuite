import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import './index.css'
import App from './App.tsx'
import ReactGA from "react-ga4";

const GA_ID = import.meta.env.VITE_GA_ID;
if (GA_ID) {
  ReactGA.initialize(GA_ID);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
)
