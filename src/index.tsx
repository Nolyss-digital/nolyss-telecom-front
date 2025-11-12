/**
 * Root Element
 * (Entry Point of Template)
 * 
 * Moving towards {@link App} from here
 * @module Index
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

/**
 * Creating root HTML element, 
 * to be enclosed with index html inside public folder
 */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

/**
 * Rendering app from root;
 * basename is used for setting app URL prefix
 */
root.render(
  <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
