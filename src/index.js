import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './default.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('12234'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>

);

reportWebVitals();
