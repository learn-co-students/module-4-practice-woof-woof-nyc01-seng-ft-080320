import React from 'react'

function Dog(props) {

    function clickHandler(e) {
        props.clickHandler(props.dog)
    }

    return(
        <>
            <img alt="" src={props.dog.image}/>
             <h2>{props.dog.name}</h2>
             {props.dog.isGoodDog ? 
                <button onClick={clickHandler}>Good Dog!</button> :
                <button onClick={clickHandler}>Bad Dog!</button>}
       </>
    )
}

export default Dog