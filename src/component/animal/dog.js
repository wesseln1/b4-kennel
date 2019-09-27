import React, { Component } from 'react'


class BuildDogForm extends Component {
    render(dog){
        return ( 
        <div>
        <img src={pup} alt="My Dog" />
        <h3>Name: <span className="card-petname">{dog.name}</span></h3>
        <p>Breed: {dog.breed}</p>
        </div>
        )
    }
}

export default BuildDogForm 