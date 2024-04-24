import React from "react";
import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helper/helper";

const SearchBox = ({ search, setSearch, setQuery }) => {
  const searchHandler = () => {
    // setQuery((query) => ({ ...query, search: search }));
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        value={search}
      />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  );
};

export default SearchBox;
