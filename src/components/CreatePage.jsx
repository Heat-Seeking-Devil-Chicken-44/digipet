import React from 'react';
import Form from './Form';
import PetPage from './PetPage';
import Dropdown from './Dropdown';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function CreatePage() {
  return (
    <div id='create-page'>
      {/* <h1>From create page</h1> */}
      <Router>
        <Dropdown />
      </Router>
      <Form />

      {/* <PetPage/> */}
    </div>
  );
}

export default CreatePage;
