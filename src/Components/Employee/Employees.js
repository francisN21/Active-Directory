import React, { Component } from "react";
import Search from "../Search/Search";
import API from "../Utils/API";
import "./Employees.css";

export default class Employees extends Component {
  state = {
    sort: "",
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
    if ((e.target.name = "search")) {
      let userInput = e.target.value.toLowerCase() || e.target.value;
      //   need to add this function to add typed string
      const addInput = (x) => {
        let str = "";
        str += x;

        this.setState({
          userSearch: str,
        });
        console.log(str);
      };
      addInput(userInput);
    }
  };

  sortByFirstname = () => {
    const sortName = this.state.results.sort((x, y) => {
      if (x.name.first < y.name.first) {
        return -1;
      }
      if (x.name.first > y.name.first) {
        return 1;
      }
      return 0;
    });
    this.setState({ employees: sortName });
  };

  render() {
    return (
      <div className="container position-relative">
        <Search
          handleInputChange={this.handleInputChange}
          search={this.state.userSearch}
        />
        {this.state.employees.map((employee) =>
          employee.name.first.toLowerCase().includes(this.state.userSearch) ? (
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
          ) : employee.name.last
              .toLowerCase()
              .includes(this.state.userSearch) ? (
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
          ) : null
        )}
      </div>
    );
  }
}
