import React, {useState} from 'react';

const FilterButton = props => {

  return(
    <div id="filter-div">
      <button onClick={props.toggleFilter} id="good-dog-filter">Filter good dogs: {props.filter}</button>
    </div>
  );
}

export default FilterButton;