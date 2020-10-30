import React from "react";
import "./credit.css";

import { FiGithub } from "react-icons/fi";
const Credit = () => {
  const className: string = "credit";

  return (
    <div className={className}>
      <p className="creditP">
        Developed by: <span className="creditName">mladen blagovcanin</span>
        <span>
          <a
            href="https://github.com/Ma5ha/Rubicon"
            rel="noreferrer"
            target="_blank"
          >
            <FiGithub />
          </a>
        </span>
      </p>
    </div>
  );
};

export default Credit;
