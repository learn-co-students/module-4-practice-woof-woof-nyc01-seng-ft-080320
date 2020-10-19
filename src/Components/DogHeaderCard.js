import React from 'react'

const DogHeaderCard = (props) => {
    const localClickHandler = () => {
        props.clickHandler(props.dog)
    }
    return(
       <span onClick={localClickHandler}>
          {props.dog.name}
           </span>
    )
}

export default DogHeaderCard