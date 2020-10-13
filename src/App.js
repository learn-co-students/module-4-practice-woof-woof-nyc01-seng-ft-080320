import React from 'react';
import './App.css';
import DogBar from './Components/DogBar'
import DogInfoContainer from './Containers/DogInfoContainer'

class App extends React.Component {
    state = {
        dogList: [],
        dogToShow: undefined
    }

    componentDidMount = () => {
        fetch('http://localhost:3000/pups/')
            .then(resp => resp.json())
            .then(dogApi => this.setState({dogList: dogApi}))
    }

    showDog = (dogObj) => {
        this.setState({dogToShow: dogObj})
    }

    clickHandler = (dogObj) => {
        this.setState(prevState => {
            return {
                dogToShow: {...prevState.dogToShow, ...{isGoodDog: !prevState.dogToShow.isGoodDog}}
            }
        }, this.updateDog(this.state.dogToShow))
    }

    updateDog = (dogObj) => {
        const options = {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Accepts: 'applicatin/json'
            },
            body: JSON.stringify({isGoodDog: !dogObj.isGoodDog})
        }

        fetch(`http://localhost:3000/pups/${dogObj.id}`, options)
            .then(resp => resp.json())
            .then(dogObj => {
                const newArray = [...this.state.dogList]
                const index = newArray.findIndex(dog => dog.id === dogObj.id)
                newArray.splice(index, 1, dogObj)
                this.setState({ dogList: newArray })
            })
    }

    render() {
        return (
            <div className="App">
            <div id="filter-div">
                <button id="good-dog-filter">Filter good dogs: OFF</button>
            </div>
            <DogBar dogList={this.state.dogList} showDog={this.showDog}/>
            <DogInfoContainer dog={this.state.dogToShow} clickHandler={this.clickHandler}/>
            </div>
        );
    }
}

export default App;
