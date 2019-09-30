//import the components we will need
import React, { Component } from "react";
import EmployeeCard from "./employeeCard";
import employeeManager from "../../modules/employeeManager";

class EmployeeList extends Component {
  //define what this component needs to render
  state = {
    employees: []
  };

  componentDidMount() {
    console.log("EMPLOYEE LIST: ComponentDidMount");
    //getAll from EmployeeManager and hang on to that data; put it in state
    employeeManager.getAll().then(employees => {
      this.setState({
        employees: employees
      });
    });
  }

  render() {
    // console.log("EMPLOYEE LIST: Render", this.state.employees);

    return (
      <div className="container-cards">
        {this.state.employees.map(employee => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    );
  }
}

export default EmployeeList;
