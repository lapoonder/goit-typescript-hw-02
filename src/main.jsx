import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { ModalProvider } from './hooks/ModalContext.jsx';
import 'modern-normalize';
import './index.css';
import App from './components/App/App.jsx';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <ModalProvider>
        <App />
      </ModalProvider>
    </StrictMode>
  );
} else {
  console.error("Element with id 'root' not found.");
}
