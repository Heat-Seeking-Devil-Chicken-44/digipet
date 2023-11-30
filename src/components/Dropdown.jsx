import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

function Dropdown({ changePage, setPetId, petId }) {
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
    // let petNames = document.getElementById('pet-names');
    // let id = petNames.options[petNames.selectedIndex].id;
    // console.log('id', id);

    // // console.log('current target', /currentTarget)
    // navigate(`/petpage/${id}`);
    // if (typeof changePage === 'function') {

    changePage('PetPage');
    console.log(e.target);
    console.log(e.target.options[e.target.selectedIndex].id);
    const selectedId = e.target.options[e.target.selectedIndex].id;
    setPetId(selectedId);
    // }
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

export default Dropdown;
