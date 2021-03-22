import React from "react";
import "./Search.css";

const Search = (props) => {
  return (
    <div>
      <form className="">
        <input
          onChange={props.handleInputChange}
          value={props.userSearch}
          className="form-control me-2 search-bar"
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
