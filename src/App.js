import React from 'react';
import './App.css';
import DogList from './Containers/DogList'
import GoodDogFilter from './Components/GoodDogFilter'
import BigDogCard from './Components/BigDogCard'

class App extends React.Component {

  state={
    dogsURL: "http://localhost:3000/pups/",
    dogs: [],
    currentDog: {}
  }

  fetchDogs() {
    fetch(this.state.dogsURL)
    .then(resp => resp.json())
    .then(dogs => {
      this.setState({dogs})
    })
  }

  componentDidMount() {
    this.fetchDogs()
  }

  selectDog = (dog) => {
    this.setState({currentDog: dog})
  }

  render() {
    return (
      <div className="App">
        <GoodDogFilter />
        <DogList dogs={this.state.dogs} selectDog={this.selectDog}/>
        <BigDogCard dog={this.state.currentDog} />
      </div>
    );
  }

}

export default App;
