

import React from 'react'

class GoodDogFilter extends React.Component {

    render() {
        return (
            <div id="filter-div">
                <button id="good-dog-filter" onClick={this.props.filterDogs}>Filter good dogs: {this.props.filtered ? "ON" : "OFF"}</button>
            </div>
        )
    }
}

export default GoodDogFilter
