import React, { Component } from 'react';
import pup from "./dog.svg"

// rendering each card to the dom
export default class AnimalCard extends Component {
  render() {
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