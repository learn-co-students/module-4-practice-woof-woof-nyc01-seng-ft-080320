import React from 'react'

const FilterButton = (props) => {
    return (
        <div id="filter-div">
            <button id="good-dog-filter" onClick={props.clickHandler}>
                Filter good dogs: { props.filter === false ? 'OFF' : 'ON'}
            </button>
        </div>
    )
}

export default FilterButton