import React from 'react';
import { useNavigate } from 'react-router';
import shark from '../assets/goblin_shark_puppy_by_tsaoshin_df0germ-pre.jpeg';
import redlip from '../assets/red-lipped.jpeg';
import crab from '../assets/yeti-crab-prints Medium.jpeg';

function Form({ changePage, setPetId, petId }) {
  function handleContinue(e) {
    //get input from name input
    e.preventDefault();
    const inputName = document.getElementById('name').value;
    console.log('inputName: ', inputName);
    let petPicture;
    //get input from whichever picture is chosen
    petPicture = document.querySelector('input[name="petName"]:checked').value;
    console.log('petPicture: ', petPicture);
    //send this data on POST request body
    fetch('http://localhost:3000/pets/add', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name: inputName, picture: petPicture }),
    })
      //THEN invoke react router for PetPage
      .then((response) => response.json())
      .then((data) => {
        changePage('PetPage');
        console.log(data._id);
        setPetId(data._id);
      })

      .catch((error) => console.log('this is not working', error));
  }

  return (
    <div id="create-pet-container">
      <form id="create pet">
        <div className="create-title">Create a new pet!</div>
        <label htmlFor="name">Pet's name</label>
        <input type="text" id="name" />

        <fieldset id="create-radio-outer-container">
          <div className="create-radio-inner-container">
            <div className="create-radio-img-container">
              {/* <source srcSet="https://cdn3.vectorstock.com/i/1000x1000/08/17/goblin-shark-vector-9340817.jpg" /> */}
              <img
                src={shark}
                alt="shark"
                // style={{ width: '48px', height: '48px' }}
              />
            </div>
            <label htmlFor="pet1">Goblin Shark</label>
            <input type="radio" id="shark" name="petName" value="shark" />
          </div>

          <div className="create-radio-inner-container">
            <div className="create-radio-img-container">
              {/* <source srcSet='https://cdn3.vectorstock.com/i/1000x1000/08/17/goblin-shark-vector-9340817.jpg' /> */}
              <img src={redlip} alt="red-lip" style={{ objectFit: 'cover' }} />
            </div>
            <label htmlFor="pet2">Red-Lipped Batfish</label>
            <input type="radio" id="batfish" name="petName" value="batfish" />
          </div>

          <div className="create-radio-inner-container">
            <div className="create-radio-img-container">
              {/* <source srcSet='https://cdn3.vectorstock.com/i/1000x1000/08/17/goblin-shark-vector-9340817.jpg' /> */}
              <img
                src={crab}
                alt="shark"
                // style={{ width: '48px', height: '48px' }}
              />
            </div>
            <label htmlFor="pet3">Yeti Crab</label>
            <input type="radio" id="crab" name="petName" value="crab" />
          </div>
        </fieldset>

        <button onClick={handleContinue}>Continue</button>
      </form>
    </div>
  );
}

export default Form;
