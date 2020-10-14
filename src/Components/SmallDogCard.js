import React from 'react'


class SmallDogCard extends React.Component {

    selectDog = () => {
        this.props.selectDog(this.props.dog)
    }

    render() {
        return (
            <span onClick={this.selectDog}>
                <img src={this.props.dog.image} alt={this.props.dog.name} />
                {this.props.dog.name}
            </span>
        )
    }
}

export default SmallDogCard
