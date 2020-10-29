import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import Movie from "../components/movie/movie";
import Tv from "../components/tv/tv";

import useInputHook from "../hooks/inputHook";
import TvDetails from "../components/tv/tvDetails";
import MovieDetails from "../components/movie/movieDetails";

export const SearchContext = React.createContext<any>(null);

export const Home = () => {
  const [query, onChange] = useInputHook("");
  const value = { query, onChange };

  let { path } = useRouteMatch();

  return (
    <SearchContext.Provider {...{ value }}>
      <Switch>
        <Route exact path={`${path}/tv`}>
          <Tv />
        </Route>
        <Route exact path={`${path}/movie`}>
          <Movie />
        </Route>
        <Route exact path={`${path}/tv/:id`}>
          <TvDetails />
        </Route>
        <Route exact path={`${path}/movie/:id`}>
          <MovieDetails />
        </Route>
        <Route exect path={path}>
          <Redirect
            to={{
              pathname: `${path}/tv`,
            }}
          />
        </Route>
      </Switch>
    </SearchContext.Provider>
  );
};
