import React, { useState } from 'react';
import DogInfo from '../Components/DogInfo';

const DogSummary = props => {
  

  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      <DogInfo dog={props.dog} toggleGoodness={props.toggleGoodness} />
    </div>
  );
}

export default DogSummary