import React from "react";

const Search = (props) => {
  return (
    <div>
      <form class="d-flex">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          className="form-control me-2"
          name="search"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
