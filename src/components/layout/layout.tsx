import React from "react";
import { Header } from "./header";
import { Main } from "./main";
import "./layout.css";
import { Footer } from "./footer";
const Layout = () => {
  const className = "layout";

  return (
    <div {...{ className }}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
