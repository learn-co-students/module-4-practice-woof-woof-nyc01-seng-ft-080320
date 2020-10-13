import React from 'react'

const DogBar = (props) => {

    const renderDogNames = (dogList) => {
        return dogList.map(dog => <span>{dog.name}</span>)
    }
    return <div id="dog-bar">
        {renderDogNames(props.dogList)}
    </div>
}

export default DogBar

