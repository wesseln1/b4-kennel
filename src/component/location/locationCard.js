import React, { Component } from 'react';
import place from "./place.png"

export default class LocationCard extends Component {
    render() {
      return (
        <div className="card">
          <div className="card-content">
            <picture>
            </picture>
            {
                this.props.locations.map( location =>
                  <div key={location.name}>
                  <img src={place} alt="My Dog" />
                  <h3>Name: <span className="card-petname">{location.name}</span></h3>
                  <p>Adress: {location.address}</p>
              </div>
              )
          }
          </div>
        </div>
      );
    }
  }