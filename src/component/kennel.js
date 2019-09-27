import React, { Component } from 'react'
import './kennel.css'
import AnimalCard from "./animal/animalCard"
import OwnerCard from "./owner/ownerCard"
import LocationCard from "./location/locationCard"
import EmployeeCards from "./employee/employeeCard"

class Kennel extends Component {
animals = [
    {name: "Todd", breed: "Cat", id: 1},
    {name: "Chester", breed: "Dog", id: 2}
]

employees = [
    {name: "Julian", posistion: "Cashier", id: 1},
    {name: "Mary", posistion: "Owner", id: 2},
    {name: "Jake", posistion: "Manager", id: 3},
    {name: "Amy", posistion: "Stocker", id: 4}
]

owners = [
    {name: "Nick", breed: "Human", id: 1},
    {name: "Brett", breed: "Human", id: 1},
    {name: "Petey", breed: "Dwarf", id: 1}
]

locations = [
    {name: "Nashville North", address: "500 Circle Way", id: 1},
    {name: "Nashville South", address: "10101 Binary Court", id: 2}
]

state = {
    animal: this.animals,
    location: this.locations,
    owner: this.owners,
    employee: this.employees
}

    render() {
        return (
            <div>
                <h2>Student Kennels<br />
                    <small>Loving care when you're not there.</small>
                </h2>
                <address>
                    Visit Us at the Nashville North Location
                    <br />500 Puppy Way
                </address>
                <AnimalCard animals={this.state.animal}/> 
                <OwnerCard owners={this.state.owner}/> 
                <LocationCard locations={this.state.location}/> 
                <EmployeeCards employees={this.state.employee}/> 
            </div>
        );
    }
}

export default Kennel