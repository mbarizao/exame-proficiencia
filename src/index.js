import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/default.css';
import 'styles/applicationStyles.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from 'reportWebVitals';

import Pages from 'pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
