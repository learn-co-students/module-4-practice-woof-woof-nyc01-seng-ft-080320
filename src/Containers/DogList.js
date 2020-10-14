import React from 'react'
import SmallDogCard from '../Components/SmallDogCard'

class DogList extends React.Component {

    renderDogs() {
        if (this.props.filtered) {
            return this.props.dogs.filter(dog => dog.isGoodDog).map(dog => <SmallDogCard dog={dog} key={dog.id} selectDog={this.props.selectDog}/>)
        } else {
            return this.props.dogs.map(dog => <SmallDogCard dog={dog} key={dog.id} selectDog={this.props.selectDog}/>)
        }
    }

    render() {
        return (
            <div id="dog-bar">           
                {this.renderDogs()}
            </div>
        )
    }
}

export default DogList
