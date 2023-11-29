import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import CreatePage from './components/CreatePage.jsx';
// import './scss/_app.scss';
// import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
