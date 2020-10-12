import React from 'react';
import './App.css';
import './index.css';
import DogHeaderContainer from './Containers/DogHeaderContainer';
import DogInfoContainer from './Containers/DogInfoContainer';
import DogInfoCard from './Components/DogInfoCard';

class App extends React.Component {
	state = {
		api: [],
		currentDog: {},
		filterOn: false
	};

	componentDidMount = () => {
		fetch('http://localhost:3000/pups').then((resp) => resp.json()).then((dogs) => {
			this.setState({
				api: dogs
			});
		});
	};

	dogHeaderClickHandler = (dogObj) => {
		this.setState({
			currentDog: dogObj
		});
	};

	goodOrBadClickHandler = (dogObj) => {
		const options = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			},
			body: JSON.stringify({ isGoodDog: !dogObj.isGoodDog })
		};
		fetch(`http://localhost:3000/pups/${dogObj.id}`, options).then((resp) => resp.json()).then((dog) => {
			const newArr = [ ...this.state.api ];
			const index = newArr.indexOf(dogObj);
			newArr[index] = dog;
			this.setState({
				api: newArr,
				currentDog: dog
			});
		});
	};

	filterHandler = () => {
		this.setState((prevState) => ({
			filterOn: !prevState.filterOn
		}));
	};
	render() {
		return (
			<div className="App">
				<div id="filter-div">
					<button onClick={this.filterHandler} id="good-dog-filter">
						{this.state.filterOn ? 'Filter good dogs: ON' : 'Filter good dogs: OFF'}
					</button>
				</div>
				<div id="dog-bar">
					<DogHeaderContainer
						dogs={this.state.api}
						clickHandler={this.dogHeaderClickHandler}
						filter={this.state.filterOn}
					/>
				</div>
				<div id="dog-summary-container">
					<h1>DOGGO:</h1>
					<div id="dog-info">
						<DogInfoContainer
							clickHandler={this.goodOrBadClickHandler}
							currentDog={this.state.currentDog}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
