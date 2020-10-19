import React from 'react';
import { EditForm } from './EditForm';

const DogInfoCard = (props) => {
    const localClickHandler = () => {
        props.clickHandler(props.currentDog)
    }

    const localEditHandler = () => {
        props.editHandler(props.currentDog)
    }

	const button = () => {
		if (props.currentDog.isGoodDog) {
			return (<div><button onClick={localClickHandler}>Bad Dog!</button><button onClick={localEditHandler}>Edit Image</button></div>
                );
		} else if (props.currentDog.isGoodDog === false) {
            return (<div><button onClick={localClickHandler}>Good Dog!</button><button onClick={localEditHandler}>Edit Dog</button></div>)
        }
            
    };
	if (props.currentDog !== {}) {
		return (
			<div>
				<img src={props.currentDog.image} alt=''/>
				<h2>{props.currentDog.name}</h2>
				{button()}
                {props.showEditForm? <EditForm dogToEdit={props.dogToEdit}editFormChangeHandler={props.editFormChangeHandler} submitHandler={props.submitHandler}/>: null}
			</div>
		);
	} else {
		return <div />;
	}
};

export default DogInfoCard;
