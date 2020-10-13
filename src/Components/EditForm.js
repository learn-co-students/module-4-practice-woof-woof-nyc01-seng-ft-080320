import React from 'react';

const EditForm = (props) => {
    console.log(props.dogToEdit)
	return (
		<form onSubmit={props.submitHandler}>
			<label>Name:</label>
			<br />
			<input name="name" value={props.dogToEdit.name}onChange={props.editFormChangeHandler}/>
			<br />
			<label>Img URL:</label>
			<br />
			<input name="image" value={props.dogToEdit.image}onChange={props.editFormChangeHandler}/>
            <br />
            <input type="submit" value="Edit this adorable dog!" />
		</form>
	);
};

export {EditForm}
