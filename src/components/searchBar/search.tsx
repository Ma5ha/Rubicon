import React from "react";
import css from "./search.module.css";

const SearchBar = ({ value, onChange, placeholder }) => {
  const className = css.input;
  return (
    <form>
      <input
        {...{ className }}
        {...{ value }}
        {...{ onChange }}
        {...{ placeholder }}
      />
    </form>
  );
};

export default SearchBar;
