import React, { Component } from 'react';
import worker from "./worker.png"

export default class EmployeeCards extends Component {
    render() {
      return (
        <div className="card">
          <div className="card-content">
            <picture>
            </picture>
            {
                this.props.employees.map( employee =>
                  <div key={employee.name}>
                  <img src={worker} alt="My Dog" />
                  <h3>Name: <span className="card-petname">{employee.name}</span></h3>
                  <p>Posistion: {employee.breed}</p>
              </div>
              )
          }
          </div>
        </div>
      );
    }
  }