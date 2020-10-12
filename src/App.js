import React, { useState } from 'react';
import AllDogs from './Containers/AllDogs';
import DogSummary from './Containers/DogSummary';
import './App.css';

function App() {
  const [dog, setDog] = useState({});

  const toggleGoodness = () => {
    fetch(`http://localhost:3000/pups/${dog.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        isGoodDog: !dog.isGoodDog
      })
    })
    .then(response => response.json())
    .then(json => setDog(json))
  }

  return (
    <div className="App">
      <AllDogs appSetDog={setDog} />
      <DogSummary dog={dog} toggleGoodness={toggleGoodness} />
    </div>
  );
}

export default App;
