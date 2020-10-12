import React from 'react'
import Dog from '../components/Dog.js'
class DogContainer extends React.Component {
    render() {
        return (
            <div id="dog-summary-container">
                <h1>DOGGO:</h1>
                <Dog dog={this.props.dog} switch={this.props.switch} />
                
            </div>
        )
    }
}

export default DogContainer