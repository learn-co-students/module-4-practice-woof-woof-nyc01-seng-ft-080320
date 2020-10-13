import React from 'react';
import DogInfoCard from '../Components/DogInfoCard';

const DogInfoContainer = (props) => {
	return (
		<div>
			<DogInfoCard
            dogToEdit={props.dogToEdit}
            editFormChangeHandler={props.editFormChangeHandler}
            submitHandler={props.submitHandler}
				showEditForm={props.showEditForm}
				editHandler={props.editHandler}
				clickHandler={props.clickHandler}
				currentDog={props.currentDog}
			/>
		</div>
	);
};

export default DogInfoContainer;
