import React from "react";
import "./App.css";
import Layout from "./components/layout/layout";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
function App() {
  const history = createBrowserHistory();
  return (
    <Router {...{ history }}>
      <Layout />
    </Router>
  );
}

export default App;
