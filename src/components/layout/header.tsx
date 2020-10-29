import React from "react";
import TaskTitle from "../taskTitle/tastTitle";

export const Header = () => {
  const className = "header";

  return (
    <div {...{ className }}>
      <TaskTitle />
    </div>
  );
};
