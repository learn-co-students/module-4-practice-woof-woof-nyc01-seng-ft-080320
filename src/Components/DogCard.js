import React from 'react';

const DogCard = props => {
  const handleClick = () => {
    props.appSetDog(props.dog)
  }

  return (
    <span onClick={handleClick}>{props.dog.name}</span>
  );
}

export default DogCard;