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
        className={className}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </form>
  );
};

export default SearchBar;
