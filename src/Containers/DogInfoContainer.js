import React from 'react'
import Dog from '../Components/Dog'

const DogInfoContainer = (props) => {
    return (<div id="dog-summary-container">
            <h1>DOGGO:</h1>
            {props.dog ? <Dog dog={props.dog} clickHandler={props.clickHandler}/> : null }
        </div>
    )
}

export default DogInfoContainer