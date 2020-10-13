import React from 'react'

const DogBar = (props) => {

    const renderDogNames = (dogList) => {
        return dogList.map((dog, indx) => <span key={indx} onClick={() => props.showDog(dog)}>{dog.name}</span>)
    }
    return <div id="dog-bar">
        {renderDogNames(props.dogList)}
    </div>
}

export default DogBar

