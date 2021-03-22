import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <div className=" search-placeholder">
      <form>
        <input
          onChange={props.handleInputChange}
          value={props.userSearch}
          className=" search-bar"
          name="search"
          type="text"
          placeholder="Search by First or Last name"
          aria-label="Search"
        />
      </form>
    </div>
  );
};

export default Search;
