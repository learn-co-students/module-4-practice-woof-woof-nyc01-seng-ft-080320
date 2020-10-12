import React, { useState } from 'react';
import FilterButton from '../Components/FilterButton';
import DogBar from './DogBar';

const AllDogs = props => {
  const [filter, setFilter] = useState('OFF')

  const toggleFilter = () => {
    if (filter === 'OFF') {
      setFilter('ON');
    } else {
      setFilter('OFF');
    }
  }

  return (
    <div>
      <FilterButton filter={filter} toggleFilter={toggleFilter} />
      <DogBar appSetDog={props.appSetDog} filter={filter} />
    </div>
  );
}

export default AllDogs;