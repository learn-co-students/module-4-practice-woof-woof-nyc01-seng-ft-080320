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

    render() {
        return (
            <div className="App">
            <div id="filter-div">
                <button id="good-dog-filter">Filter good dogs: OFF</button>
            </div>
            <DogBar dogList={this.state.dogList} showDog={this.showDog}/>
            <DogInfoContainer dog={this.state.dogToShow}/>
            </div>
        );
    }
}

export default App;
