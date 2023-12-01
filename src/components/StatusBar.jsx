import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router';
import begging from '../assets/audio/begging.mp3';
import gulp from '../assets/audio/gulp.mp3';
function StatusBar({ changePage, setPetId, petId }) {
  // set states for both hunger and thirst
  const [hunger, setHunger] = useState(0);
  const [thirst, setThirst] = useState(0);
  // handle feed and hydrate button click

  const handleFeedButton = () => {
    playSoundFeed();
    setHunger((prevHunger) => Math.min(prevHunger + 10, 100));
    console.log(hunger);

    updateServerValues({ hunger: hunger + 10 });
  };

  const handleHydrateButton = () => {
    playSoundHydrate();
    setThirst((prevThirst) => Math.min(prevThirst + 10, 100));
    updateServerValues({ thirst: thirst + 10 });
  };

  const playSoundHydrate = () => {
    let audio = new Audio(gulp);
    audio.volume = 0.5;
    audio.play();
  };

  const playSoundFeed = () => {
    let audio = new Audio(begging);
    audio.volume = 0.5;
    audio.play();
  };
  // useEffect
  // fetch the initial values from the server/database
  // use the fetched value to update the state
  // decrement of hunger and thirst over time
  useEffect(() => {
    fetch(`http://localhost:3000/pets/one/${petId}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (data && data.hunger !== undefined && data.thirst !== undefined) {
          setHunger(data.hunger);
          setThirst(data.thirst);
          console.log(data.thirst);
          console.log(data.hunger);
        }
      })
      .catch((error) => console.log('Error fetching values:', error));

    const decreaseHungerThirst = setInterval(() => {
      setHunger((prevHunger) => Math.max(prevHunger - 5, 0));
      setThirst((prevThirst) => Math.max(prevThirst - 5, 0));
    }, 5000);

    return () => clearInterval(decreaseHungerThirst);
  }, [petId]);

  // update the server side values
  const updateServerValues = (updatedValues) => {
    console.log('id: ', petId);
    fetch(`/pets/update/${petId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedValues),
    })
      .then((data) => data.json())
      .then((updatedData) => {
        setHunger(updatedData.hunger);
        setThirst(updatedData.thirst);
      })
      .catch((error) => console.log('Error updating: ', error));
  };
  // render

  return (
    <div className="status-bar">
      <span id="hunger">Hunger:</span>
      <progress value={hunger} max="100"></progress>
      <button onClick={handleFeedButton}>Feed</button>
      <span id="thirst">Thirst:</span>
      <progress value={thirst} max="100"></progress>
      <button onClick={handleHydrateButton}>Hydrate</button>
    </div>
  );
}

export default StatusBar;
