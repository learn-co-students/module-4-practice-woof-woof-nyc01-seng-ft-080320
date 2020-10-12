import React from 'react';

const DogInfoCard = (props) => {
    const localClickHandler = () => {
        props.clickHandler(props.currentDog)
    }

	const button = () => {
		if (props.currentDog.isGoodDog) {
			return <button onClick={localClickHandler}>Bad Dog!</button>;
		} else if (props.currentDog.isGoodDog === false) {
			return <button onClick={localClickHandler}>Good Dog!</button>;
		}
	};
	if (props.currentDog !== {}) {
		return (
			<div>
				<img src={props.currentDog.image} />
				<h2>{props.currentDog.name}</h2>
				{button()}
			</div>
		);
	} else {
		return <div />;
	}
};

export default DogInfoCard;
