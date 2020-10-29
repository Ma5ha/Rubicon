import React from "react";

const NoSearchResult = ({ type, title }) => {
  return (
    <div className="noResult">
      <p>
        No {type} with title <mark>{title}</mark>
      </p>
    </div>
  );
};

export default NoSearchResult;
