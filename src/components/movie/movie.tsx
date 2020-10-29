import React, { useContext } from "react";
import SearchBar from "../searchBar/search";
import { SearchContext } from "../../page/home";
import { NavLink } from "react-router-dom";
import NavigationWarper from "../tab/tab";
import Top10Movies from "./top10Movies";
import useDebounce from "../../hooks/useDebounce";
import MovieSearchResult from "./movieSearchresult";
import { FaTv, FaFilm } from "react-icons/fa";
const Movie = () => {
  const context = useContext(SearchContext);
  const { query: value, onChange } = context;
  const debounce = useDebounce(context.query, 1000);
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
            className="linkTab boxSahdow"
            activeClassName="linkActive"
          >
            <FaFilm />
          </NavLink>
        </div>
        <SearchBar {...{ value }} {...{ onChange }} {...{ placeholder }} />
      </NavigationWarper>
      {rednerCondtion ? <MovieSearchResult /> : <Top10Movies />}
    </>
  );
};

export default Movie;
