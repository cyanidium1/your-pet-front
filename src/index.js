import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Container from './modules/shared/container/container';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/your-pet-front">
    <React.StrictMode>
      <Container>
        <App />
      </Container>
    </React.StrictMode>
  </BrowserRouter>
);
