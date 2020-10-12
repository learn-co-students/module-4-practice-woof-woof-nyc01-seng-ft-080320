import React from 'react'
import DogBar from '../components/DogBar.js'

function Filter(props) {
    function eachDog(){
        return props.dogs.map(dog => {
        return <DogBar dog={dog} selected={props.selected}/>})
    }
    
    return (
        <>
            <div id="filter-div">
                <button id="good-dog-filter" onClick={props.filter}>Filter good dogs: {props.filterState}</button>
            </div>
            <div id="dog-bar">
                {eachDog()}
            </div>
        </>
    )
}

export default Filter