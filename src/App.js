import React from 'react';
import './App.css';
import DogBar from './Components/DogBar'
import DogInfoContainer from './Containers/DogInfoContainer'
import FilterButton from './Components/FilterButton'

class App extends React.Component {
    state = {
        dogList: [],
        dogToShow: undefined,
        filter: false
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

    filterClickHandler = () => {
        this.setState(prevState => { 
            return {filter: !prevState.filter }
        })
    }

    filterGoodDogs = () => {
        return this.state.dogList.filter(dog => dog.isGoodDog)
    }

    render() {
        return (
            <div className="App">
            <FilterButton filter={this.state.filter} clickHandler={this.filterClickHandler}/>
            <DogBar dogList={this.state.filter === false ? this.state.dogList : this.filterGoodDogs()} 
                showDog={this.showDog}
            />
            <DogInfoContainer dog={this.state.dogToShow} clickHandler={this.clickHandler}/>
            </div>
        );
    }
}

export default App;
