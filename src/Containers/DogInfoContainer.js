import React from 'react'
import DogInfoCard from '../Components/DogInfoCard'

const DogInfoContainer = (props) => {
    return(
        <div>
            <DogInfoCard clickHandler={props.clickHandler}currentDog={props.currentDog}/>
        </div>
    )
}

export default DogInfoContainer