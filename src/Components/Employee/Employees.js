import React, { Component } from "react";
import Search from "../Search/Search";
import API from "../Utils/API";
import "./Employees.css";

export default class Employees extends Component {
  state = {
    employees: [],
    userSearch: "",
  };
  componentDidMount() {
    API.UserSearch()
      .then((res) => {
        this.setState({ employees: res.data.results });
        console.log(this.state.employees[0]);
      })
      .catch((err) => console.log(err));
  }
  handleInputChange = (e) => {
    if (e.target.name === "search") {
      const userInput = e.target.value.toLowerCase();
      this.setState({
        userSearch: userInput,
      });
    }
  };

  render() {
    return (
      <div className="container position-relative">
        <Search
          handleInputChange={this.handleInputChange}
          search={this.state.userSearch}
          onChange={console.log(this.state.userSearch)}
        />
        {this.state.employees &&
          this.state.employees.map((employee) =>
            this.state.userSearch ? (
              <div
                key={employee.login.uuid}
                className="user-container col-md-12"
              >
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
            ) : null
          )}
      </div>
    );
  }
}
