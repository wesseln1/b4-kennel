import React, { Component } from 'react';
import person from "./person.png"

export default class OwnerCard extends Component {
    render() {
      return (
        <div className="card">
          <div className="card-content">
            <picture>
            </picture>
            {
                this.props.owners.map( owner =>
                  <div key={owner.name}>
                  <img src={person} alt="My Dog" />
                  <h3>Name: <span className="card-petname">{owner.name}</span></h3>
                  <p>Breed: {owner.breed}</p>
              </div>
              )
          }
          </div>
        </div>
      );
    }
  }