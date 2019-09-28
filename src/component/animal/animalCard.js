import React, { Component } from 'react';
import pup from "./dog.svg"
// import kitty from "./cat.jpg"

export default class AnimalCard extends Component {
  render() {
    console.log("here")
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          </picture>
                <div>
                <img src={pup} alt="My Dog" />
                <h3>Name: <span className="card-petname">{this.props.animal.name}</span></h3>
                <p>Breed: {this.props.animal.breed}</p>
            </div>
        </div>
      </div>
    );
  }
}

// export default AnimalCard;