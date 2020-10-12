import React, { useEffect, useState } from 'react';
import DogCard from '../Components/DogCard';

const DogBar = props => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/pups')
      .then(resp => resp.json())
      .then(json => setDogs(json))
  }, [props]) 

  const mapDogs = () => {
    let dogsToMap = dogs;
    if (props.filter === 'ON') {
      dogsToMap = dogs.filter(dog => { return dog.isGoodDog === true })
    } 
    return dogsToMap.map(dog => { return <DogCard appSetDog={props.appSetDog} key={dog.id} dog={dog} />})
  }

  return(
    <div id="dog-bar">
      {mapDogs()}
    </div>
  );
}

export default DogBar;