import React, { Component } from 'react'
import kitty from "./cat.jpg"

class BuildCatForm extends Component{
    render (cat){
        return (
        <div>
        <img src={kitty} alt="My Dog" />
        <h3>Name: <span className="card-petname">{cat.name}</span></h3>
        <p>Breed: {cat.breed}</p>
        </div>
        )
    }
 }
 export default BuildCatForm