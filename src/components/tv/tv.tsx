import React, { useContext } from "react";

import { SearchContext } from "../../page/home";
import SearchBar from "../searchBar/search";

import TvTop10 from "./top10";
import TvSearch from "./tvSearchResult";
import { NavLink } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import NavigationWarper from "../tab/tab";
import { FaTv, FaFilm } from "react-icons/fa";
const Tv = () => {
  const context = useContext(SearchContext);
  const debounce = useDebounce(context.query, 1000);
  const { query: value, onChange } = context;

  const placeholder = "search";

  const rednerCondtion = debounce.length > 3;

  return (
    <>
      <NavigationWarper>
        <div>
          <NavLink
            to={`/home/tv`}
            className="linkTab boxSahdow"
            activeClassName="linkActive"
          >
            <FaTv />
          </NavLink>
          <NavLink
            to={`/home/movie`}
            className="linkTab boxShadow"
            activeClassName="linkActive"
          >
            <FaFilm />
          </NavLink>
        </div>
        <SearchBar {...{ value }} {...{ onChange }} {...{ placeholder }} />
      </NavigationWarper>
      {rednerCondtion ? <TvSearch /> : <TvTop10 />}
    </>
  );
};

export default Tv;
