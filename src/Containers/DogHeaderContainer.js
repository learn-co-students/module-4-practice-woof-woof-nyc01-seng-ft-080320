import React from 'react';
import DogHeaderCard from '../Components/DogHeaderCard';
import { SearchBar } from '../Components/SearchBar';

class DogHeaderContainer extends React.Component {
	state = {
		searchTerm: ""
	};

	// componentDidMount = () => {
	// 	fetch('http://localhost:3000/pups').then((resp) => resp.json()).then((dogs) => {
	// 		this.setState({
	// 			api: dogs
	// 		});
	// 	});
    // };
    
    searchHandler = e => {
            this.setState({searchTerm: e.target.value})
    }

	renderDogs = () => {
        const searched = this.props.dogs.filter(dog => {
            return dog.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        })
		if (this.props.filter) {
			const filtered = searched.filter((dog) => {
				return dog.isGoodDog === true;
			});
			return filtered.map((dog) => {
				return <DogHeaderCard clickHandler={this.props.clickHandler} key={dog.id} dog={dog} />;
			});
		} else {
			return searched.map((dog) => {
				return <DogHeaderCard clickHandler={this.props.clickHandler} key={dog.id} dog={dog} />;
			});
		}
	};
	// renderDogs = () => {
	// 	return this.props.dogs.map((dog) => {
	// 		return <DogHeaderCard clickHandler={this.props.clickHandler}key={dog.id} dog={dog}/>;
	// 	});
	// };
	render() {
		return (
			<div>
				<SearchBar searchHandler={this.searchHandler}searchTerm={this.state.searchTerm}/>
				{this.renderDogs()}
			</div>
		);
	}
}

export default DogHeaderContainer;
