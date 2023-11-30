import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

function PetPageDropdown({ changePage, setPetId, petId }) {
  //redirect to pet page if selecting an already made pet
  console.log('this is changePage ', changePage);
  const [dropdownData, setDropdownData] = useState([]);

  //get pets from DB for dropdown menu
  useEffect(() => {
    fetch('http://localhost:3000/pets/all', {
      method: 'GET',
    })
      .then((allPetsObjects) => allPetsObjects.json())
      .then((parsedPets) => {
        setDropdownData(parsedPets);
      });
  }, []);

  function goToPetPage(e) {
    changePage('PetPage');
    const selectedId = e.target.options[e.target.selectedIndex].id;
    setPetId(selectedId);
  }
  let dataEl;
  if (Array.isArray(dropdownData)) {
    dataEl = dropdownData.map((pet) => {
      return (
        <option key={pet._id} id={pet._id}>
          {pet.name}
        </option>
      );
    });
  }
  return (
    <div id="dropdown">
      <div className="create-title">Check on your current pets!</div>
      <label htmlFor="dog-names">
        Choose from the dropdown to see the status of an existing pet
      </label>
      <select onChange={goToPetPage} name="pet-names" id="pet-names">
        {dataEl}
      </select>
    </div>
  );
}

export default PetPageDropdown;
