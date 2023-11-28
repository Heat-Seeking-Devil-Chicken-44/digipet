import React from 'react';
import StatusBar from './StatusBar';
import Dropdown from './Dropdown';
import { useState, useEffect } from 'react';
import shark from '../assets/goblin_shark_puppy_by_tsaoshin_df0germ-pre.jpeg';
// import shark from '../dist/images/goblin_shark_puppy_by_tsaoshin_df0germ-pre.jpeg';
import redlip from '../assets/red-lipped.jpeg';
import crab from '../assets/yeti-crab-prints Medium.jpeg';
// dist/images/goblin_shark_puppy_by_tsaoshin_df0germ-pre.jpeg
function PetPage() {
  const [source, setSource] = useState('');
  const [loading, setLoading] = useState(true);

  //at render the page will fetch and load image from database
  useEffect(() => {
    //declare variable url assign it the value of current url
    let url = window.location.href;
    console.log('url', url);
    console.log('url.lastIndexOf', url.lastIndexOf('/') + 1);
    let id = url.substring(url.lastIndexOf('/') + 1);
    console.log('id', id);

    fetch(`http://localhost:3000/create/pets/${id}`, {
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
          src={`${shark}`}
          alt="shark"
          style={{ width: '100px', height: '100px' }}
        />
      </div>
      <Dropdown />
      <StatusBar />
    </div>
  );
}

export default PetPage;
