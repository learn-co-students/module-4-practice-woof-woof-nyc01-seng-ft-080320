import React from 'react'

const Dog = (props) => {
        return (
            <div id="dog-info">
                <img src={props.dog.image} alt={'photo of' + props.dog.name}/>
                <h2>{props.dog.name}</h2>
                <button onClick={() => props.clickHandler(props.dog)}>
                    { props.dog.isGoodDog ? 'Good Dog!' : 'Bad Dog! '}
                </button>
            </div>
        )
}

export default Dog