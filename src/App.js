import React from 'react';
import './App.css';
import DogList from './Containers/DogList'
import GoodDogFilter from './Components/GoodDogFilter'
import BigDogCard from './Components/BigDogCard'

class App extends React.Component {

  state={
    dogsURL: "http://localhost:3000/pups/",
    dogs: [],
    currentDog: {},
    filtered: false
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

  filterDogs = () => {
    this.setState(prevState => {
      return {
        filtered: !prevState.filtered
      }
    })
  }

  render() {
    return (
      <div className="App">
        <GoodDogFilter filtered={this.state.filtered} filterDogs={this.filterDogs}/>
        <DogList dogs={this.state.dogs} selectDog={this.selectDog} filtered={this.state.filtered}/>
        <BigDogCard dog={this.state.currentDog} />
      </div>
    );
  }

}

export default App;
