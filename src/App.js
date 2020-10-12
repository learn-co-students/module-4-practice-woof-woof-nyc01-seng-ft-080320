import React from 'react';
import './App.css';
import DogsBar from './Containers/DogsBar';
import Dog from './Components/Dog'

const BASE_URL = "http://localhost:3000/pups/"

class App extends React.Component {

    state = {
      dogArray: [],
      dog: false,
      clicked: false
    }

    componentDidMount = () => {
      fetch(BASE_URL)
      .then(resp => resp.json())
      .then(dogs => this.setState({
        dogArray: dogs
      }))
    }

    renderDog = dogObj => {
      let dogData = this.state.dogArray.filter(el => el.name === dogObj.textContent)
      this.setState({
        dog: dogData[0]
      })
    }

    clickHandler = dogObj => {

      let options = {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify ({isGoodDog: !dogObj.isGoodDog})
      }
      
      fetch(BASE_URL + dogObj.id, options)
      .then(resp => resp.json())
      .then(updatedDog => {
        let newArray = [...this.state.dogArray]
        let index = newArray.indexOf(dogObj)
        newArray[index] = updatedDog
        this.setState({
          dog: updatedDog,
          dogArray: newArray
        })
      }
        )
      .catch(console.log())
    }

    filterHandler = () => {
      this.setState((prevState => {
        return {
          clicked: !prevState.clicked
        }
      }))
    }

  render() {
    return ( 
      <div className="App">
        <div id="filter-div">
          {this.state.clicked ? 
             <button onClick={this.filterHandler} id="good-dog-filter">Filter good dogs: ON</button>:
             <button onClick={this.filterHandler} id="good-dog-filter">Filter good dogs: OFF</button>
          }
        </div>
        <div id="dog-bar">
          < DogsBar clicked={this.state.clicked} renderDog={this.renderDog} dogs={this.state.dogArray}/>
        </div>
        <div id="dog-summary-container">
          <h1>DOGGO:</h1>
          <div id="dog-info">
            {this.state.dog ? <Dog dog={this.state.dog} clickHandler={this.clickHandler}/> : null}
          </div>
        </div>
      </div>
    )
  }

}

export default App;
