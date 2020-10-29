import React from "react";
import FlexWarp from "../layout/flexWarp";
import { Link } from "react-router-dom";
import "./404.css";
import { FaRegHandPointRight } from "react-icons/fa";
const Page404 = () => (
  <FlexWarp>
    <div className="page404">
      <h1>404 page not found</h1>
      <FaRegHandPointRight /> <Link to="/home">go back to home</Link>
    </div>
  </FlexWarp>
);

export default Page404;
