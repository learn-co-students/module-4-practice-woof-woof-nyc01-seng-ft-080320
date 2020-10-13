import React from 'react';
import './App.css';
import DogBar from './Components/DogBar'
import DogInfoContainer from './Containers/DogInfoContainer'

class App extends React.Component {
    state = {
        dogList: [],
    }

    componentDidMount = () => {
        fetch('http://localhost:3000/pups/')
            .then(resp => resp.json())
            .then(dogApi => this.setState({dogList: dogApi}))
    }

    render() {
        return (
            <div className="App">
            <div id="filter-div">
                <button id="good-dog-filter">Filter good dogs: OFF</button>
            </div>
            <DogBar dogList={this.state.dogList}/>
            <DogInfoContainer />
            </div>
        );
    }
}

export default App;
