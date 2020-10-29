import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "../../page/home";
import Page404 from "../404/404";
export const Main = () => {
  const className = "main";

  return (
    <div className={className}>
      <Switch>
        <Route exact path="/">
          <Redirect
            to={{
              pathname: "/home",
            }}
          />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
};
