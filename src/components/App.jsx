import React from 'react';
import { useEffect, useState } from 'react';
import CreatePage from './CreatePage.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PetPage from './PetPage.jsx';
import styles from '../styles.scss';

function App() {
  const [page, changePage] = useState('CreatePage');
  const [petId, setPetId] = useState('');

  let renderedPage;
  switch (page) {
    case 'CreatePage': {
      renderedPage = (
        <CreatePage changePage={changePage} setPetId={setPetId} petId={petId} />
      );
      break;
    }
    case 'PetPage': {
      renderedPage = (
        <PetPage changePage={changePage} setPetId={setPetId} petId={petId} />
      );
      break;
    }
    default:
      renderPage = <div>Page not found</div>;
  }
  return <div>{renderedPage}</div>;
}

export default App;
