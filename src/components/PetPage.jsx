import React from 'react';
import StatusBar from './StatusBar';
import PetPageDropdown from './PetPageDropdown';

import { useState, useEffect } from 'react';
import shark from '../assets/goblin_shark_puppy_by_tsaoshin_df0germ-pre.jpeg';
// import shark from '../dist/images/goblin_shark_puppy_by_tsaoshin_df0germ-pre.jpeg';
import redlip from '../assets/red-lipped.jpeg';
import crab from '../assets/yeti-crab-prints Medium.jpeg';
// dist/images/goblin_shark_puppy_by_tsaoshin_df0germ-pre.jpeg

function PetPage({ changePage, setPetId, petId }) {
  const [source, setSource] = useState('');
  const [loading, setLoading] = useState(true);

  //at render the page will fetch and load image from database
  useEffect(() => {
    fetch(`http://localhost:3000/create/pets/${petId}`, {
      method: 'GET',
      mode: 'cors',
    })
      .then((pet) => pet.json())
      .then((parsedPet) => {
        setSource(getPetImages(parsedPet.picture));
      })
      .catch((error) => {
        console.log('Error fetching', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function getPetImages(petPictures) {
    switch (petPictures) {
      case 'shark':
        console.log('shark img var: ', shark);
        return shark;
      case 'crab':
        return crab;
      case 'batfish':
        return redlip;
      default:
        return 'adfadfd';
    }
  }

  return (
    <div id="pet-page">
      <div id="pet-pic-container">
        <img
          src={source}
          alt={source}
          style={{ width: '100px', height: '100px' }}
        />
      </div>
      <PetPageDropdown
        changePage={changePage}
        setPetId={setPetId}
        petId={petId}
      />
      <StatusBar changePage={changePage} setPetId={setPetId} petId={petId} />
    </div>
  );
}

export default PetPage;
