import React, { Component } from 'react';
import person from "./person.png"

export default class OwnerCard extends Component {
    render() {
      console.log(this.props.card)
      return (
        <div className="card">
          <div className="card-content">
            <picture>
            </picture>
              <div>
                <img src={person} alt="My Dog" />
                <h3>Name: <span className="card-petname">{this.props.owner.name}</span></h3>
                <p>Breed: {this.props.owner.breed}</p>
              </div>
          </div>
        </div>
      );
    }
  }