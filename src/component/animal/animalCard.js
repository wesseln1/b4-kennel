import React, { Component } from 'react';
import pup from "./dog.svg"
// import kitty from "./cat.jpg"

export default class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          </picture>
          {
              this.props.animals.map( animal => 
                <div key={animal.id}>
                <img src={pup} alt="My Dog" />
                <h3>Name: <span className="card-petname">{animal.name}</span></h3>
                <p>Breed: {animal.breed}</p>
            </div>
            )
        }
        </div>
      </div>
    );
  }
}

// export default AnimalCard;