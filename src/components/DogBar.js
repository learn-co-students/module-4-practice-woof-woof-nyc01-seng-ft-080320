import React from 'react'

class DogBar extends React.Component {

    render() {
        return (
            <span>
              <img src={this.props.dog.image} alt={this.props.dog.name} onClick={() => this.props.selected(this.props.dog)}/>
              {this.props.dog.name}
            </span>
        )
    }
}

export default DogBar