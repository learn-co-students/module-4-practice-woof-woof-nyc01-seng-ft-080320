import React from 'react';

const DogInfo = props => {
  

  if (typeof props.dog.isGoodDog !== 'undefined') {
    return(
      <div id="dog-info">
        <img src={props.dog.image} alt="" />
        <h2>{props.dog.name}</h2>
        <button onClick={props.toggleGoodness}>{props.dog.isGoodDog ? 'Good Dog' : 'Bad Dog'}</button>
      </div>
    );
  } else {
    return null;
  }
}

export default DogInfo;