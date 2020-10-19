import React from 'react';
import './App.css';
import './index.css';
import DogHeaderContainer from './Containers/DogHeaderContainer';
import DogInfoContainer from './Containers/DogInfoContainer';

class App extends React.Component {
	state = {
		api: [],
		currentDog: {},
		filterOn: false,
		dogToEdit: {},
		showEditForm: false
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
				Accept: 'application/json'
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

	editHandler = (dogObj) => {
		this.setState({ dogToEdit: dogObj, showEditForm: true });
    };
    
    editDogSubmitHandler = (e) => {
        e.preventDefault()
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state.dogToEdit)
        }
        fetch(`http://localhost:3000/pups/${this.state.dogToEdit.id}`, options)
        .then(resp => resp.json())
        .then(updatedDog => {
            const newArr = [...this.state.api]
            const oldDog = newArr.find(dog => dog.id === this.state.dogToEdit.id)
            const index = newArr.indexOf(oldDog)
            newArr[index] = updatedDog
            this.setState({api: newArr, dogToEdit: {}, showEditForm: false, currentDog: updatedDog})
        })
    }

    editFormChangeHandler = e => {
        this.setState({dogToEdit:{
            ...this.state.dogToEdit,
            [e.target.name]: e.target.value
        }
        })
    }
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
                        dogToEdit={this.state.dogToEdit}
                        editFormChangeHandler={this.editFormChangeHandler}
                        submitHandler={this.editDogSubmitHandler}
							showEditForm={this.state.showEditForm}
							editHandler={this.editHandler}
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
