import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/global.scss';
import App from './App';
import { ThemeProvider } from "./ThemeContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
