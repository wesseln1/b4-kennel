import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from '../home/home'
import AnimalList from '../animal/animalList'
//only include these once they are built - previous practice exercise
import LocationCard from '../location/locationCard'
import EmployeeList from '../employee/employeeList'
import OwnerCard from '../owner/ownerCard'


class ApplicationViews extends Component {
     
    // ownerAPI = [
    //     {name: "Nick", breed: "Human", id: 1},
    //     {name: "Brett", breed: "Human", id: 1},
    //     {name: "Petey", breed: "Dwarf", id: 1}
    // ]
    
    // locationAPI = [
    //     {name: "Nashville North", address: "500 Circle Way", id: 1},
    //     {name: "Nashville South", address: "10101 Binary Court", id: 2}
    // ]

    // state = {
    // animal: this.animalAPI,
    // location: this.locationAPI,
    // owner: this.ownerAPI,
    // employee: this.employeeAPI
    // }
    render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/owner" render={(props) => {
          return <OwnerCard />
        }} />
        <Route path="/location" render={(props) => {
          return <LocationCard />
        }} />
        <Route path="/employees" render={(props) => {
          return <EmployeeList />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews