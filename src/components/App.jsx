import React from 'react';
import { useEffect, useState } from 'react';
import CreatePage from './CreatePage.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PetPage from './PetPage.jsx';
import styles from '../styles.scss';

function App() {
<<<<<<< HEAD
  const [page, changePage] = useState('mainPage');

  let renderedPage;
  switch (page) {
    case 'CreatePage': {
      renderedPage = <CreatePage changePage={changePage} />;
    }
    case 'PetPage': {
      renderedPage = <PetPage changePage={changePage} />;
    }
  }
  return { renderedPage };
=======
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={CreatePage} />
        <Route exact path='/petpage' Component={PetPage} />
        <Route exact path='/petpage/:id' Component={PetPage} />
        {/* <Route exact path='/login' Component={LoginPage} */}
      </Routes>
    </Router>
  );
>>>>>>> dev
}

export default App;
