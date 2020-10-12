import React from 'react';
import './App.css';
import Filter from './containers/Filter.js'
import DogContainer from './containers/DogContainer.js'
const dogAPI = "http://localhost:3000/pups/"
class App extends React.Component {
  state = {
    dogs: [],
    selected: {},
    filter: "OFF"
  }
  selected = (dog) => {
    this.setState({ selected: dog })
  }
  componentDidMount = () => {
    fetch(dogAPI)
      .then(resp => resp.json())
      .then(pups => {
        this.setState({ dogs: pups })
      })
  }

  whichDogs = () =>{
    let dogs = this.state.dogs
    if (this.state.filter ==="ON"){
      dogs = dogs.filter(dog => dog.isGoodDog)
  }
    return dogs
  }

  filter = (e) => {
    if (this.state.filter === "OFF"){
      this.setState({filter: "ON"})
    }else{
      this.setState({filter:"OFF"})
    }
  }

  switch = (dog) => {
    let good = !dog.isGoodDog
    dog.isGoodDog = !dog.isGoodDog
    let configObj = {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        "accepts": "application/json"
      },
      body: JSON.stringify({ isGoodDog: good })
    }
    fetch(dogAPI+dog.id, configObj)
    .then(resp => resp.json())
    .then(data => {
      let idx = this.state.dogs.findIndex(doggo => doggo.id === dog.id)
      let newArray = this.state.dogs
      newArray[idx] = dog
      this.setState({dogs: newArray})
    })
  }
  render() {
    return (
      <div className="App">
        {console.log(this.state)}
        <Filter dogs={this.whichDogs()} selected={this.selected} filterState={this.state.filter} filter={this.filter}/>
        <DogContainer dog={this.state.selected} switch={this.switch} />
      </div>
    );
  }
}
export default App;
