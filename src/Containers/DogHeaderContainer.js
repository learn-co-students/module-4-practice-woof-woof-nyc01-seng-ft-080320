import React from 'react';
import DogHeaderCard from '../Components/DogHeaderCard';

class DogHeaderContainer extends React.Component {
	// state = {
	// 	api: []
	// };

	// componentDidMount = () => {
	// 	fetch('http://localhost:3000/pups').then((resp) => resp.json()).then((dogs) => {
	// 		this.setState({
	// 			api: dogs
	// 		});
	// 	});
	// };

	renderDogs = () => {
		return this.props.dogs.map((dog) => {
			return <DogHeaderCard clickHandler={this.props.clickHandler}key={dog.id} dog={dog}/>;
		});
	};
	render() {
		return (
       <div>
{this.renderDogs()}
        </div>
        )
	}
}

export default DogHeaderContainer;
