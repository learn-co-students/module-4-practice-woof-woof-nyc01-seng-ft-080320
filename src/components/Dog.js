import React from 'react'

class Dog extends React.Component {
    buttonRender = () => {
        if(this.props.dog.isGoodDog === true){
            return <button onClick={() => this.props.switch(this.props.dog)}>Good Dog!</button>
        }else if (this.props.dog.isGoodDog === false){
            return <button onClick={() => this.props.switch(this.props.dog)}>Bad Dog!</button>
        }else{
            return null
        }
    }
    render() {
        return (
            <div id="dog-info">
                <img src={this.props.dog.image} alt={this.props.dog.name} />
                <h2>{this.props.dog.name}</h2>
                {this.buttonRender()}
            </div>
        )
    }
}

export default Dog