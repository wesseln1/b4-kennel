import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './animalCard'
import animalManager from '../../modules/animalManager'

class AnimalList extends Component {
    //define what this component needs to render
    state = {
        animals: [],
    }

componentDidMount(){
    //getAll from AnimalManager and hang on to that data; put it in state
    animalManager.getAll()
    .then((animals) => {
        this.setState({
            animals: animals
        })
    })
}

render(){
    // rendering card container and calling card function to render ALL cards
    return(
        <div className="container-cards" >
            {this.state.animals.map(animal => <AnimalCard key={animal.id} animal={animal}/>)}
        </div>
    )
}
}

export default AnimalList