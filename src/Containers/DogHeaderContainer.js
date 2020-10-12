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
        if(this.props.filter){
            const filtered = this.props.dogs.filter(dog => {
                return dog.isGoodDog === true
            })
            return filtered.map(dog => {
                return <DogHeaderCard clickHandler={this.props.clickHandler}key={dog.id} dog={dog}/>;
            })
        } else {
            return this.props.dogs.map((dog) => {
                return <DogHeaderCard clickHandler={this.props.clickHandler}key={dog.id} dog={dog}/>;
            });
        }
    }
	// renderDogs = () => {
	// 	return this.props.dogs.map((dog) => {
	// 		return <DogHeaderCard clickHandler={this.props.clickHandler}key={dog.id} dog={dog}/>;
	// 	});
	// };
	render() {

		return (
       <div>
{this.renderDogs()}
        </div>
        )
	}
}

export default DogHeaderContainer;
