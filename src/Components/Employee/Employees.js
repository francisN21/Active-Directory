import React, { Component } from "react";
import API from "../Utils/API";
import "./Employees.css";

export default class Employees extends Component {
  state = {
    employees: [],
  };
  componentDidMount() {
    API.UserSearch()
      .then((res) => {
        this.setState({ employees: res.data.results });
        console.log(this.state.employees[0]);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="container position-relative">
        {this.state.employees.map((employee) => (
          <div key={employee.login.uuid} className="user-container col-md-12">
            <img
              className="user-image"
              src={employee.picture.medium}
              alt="dp"
            />
            <p>
              {employee.name.first} {employee.name.last}
            </p>
            <p>
              {employee.location.city}, {employee.location.state}
            </p>
            <p>{employee.email}</p>
            <p>{employee.cell}</p>
          </div>
        ))}
      </div>
    );
  }
}
