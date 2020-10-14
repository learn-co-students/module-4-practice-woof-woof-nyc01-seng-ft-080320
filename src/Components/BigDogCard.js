import React from 'react'


class BigDogCard extends React.Component {

    render() {
        if (this.props.dog.name) {
            return (
                <React.Fragment>
                    <div id="dog-summary-container">
                        <h1>DOGGO:</h1>
                        <div id="dog-info">
                            <img src={this.props.dog.image} alt={this.props.dog.name} />
                            <h2>{this.props.dog.name}</h2>
                            <button>Good Dog!</button>
                        </div>
                    </div>
                </React.Fragment>
            )
        } else {
            return null
        }
    }
}


export default BigDogCard