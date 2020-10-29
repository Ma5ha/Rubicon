import React from "react";
import css from "./search.module.css";

const SearchBar = ({ value, onChange, placeholder }) => {
  const className = css.input;

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
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
