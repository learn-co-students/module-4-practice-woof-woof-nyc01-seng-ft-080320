import React from 'react'

function DogBar(props) {

    function renderDog(e) {
        props.renderDog(e.target)
    }

    function renderDogs() {
        if(props.clicked){
            return props.dogs.filter(el => el.isGoodDog).map(el => <span key={el.id} onClick={renderDog}>{el.name}</span>)
        } 
        else {
            return props.dogs.map(el => <span key={el.id} onClick={renderDog}>{el.name}</span>)
        }
    }

    return(
        renderDogs()
    )
}

export default DogBar