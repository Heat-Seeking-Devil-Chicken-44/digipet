import React from 'react';
import Form from './Form';
import PetPage from './PetPage';
import Dropdown from './Dropdown';

function CreatePage({ changePage, setPetId, petId }) {
  return (
    <div id="create-page">
      <Dropdown changePage={changePage} setPetId={setPetId} petId={petId} />
      <Form changePage={changePage} setPetId={setPetId} petId={petId} />
    </div>
  );
}

export default CreatePage;
