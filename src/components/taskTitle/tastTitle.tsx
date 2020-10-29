import React from "react";
import FlexColumn from "../layout/flexColumn";
import FlexWarp from "../layout/flexWarp";

const TaskTitle = () => {
  return (
    <FlexWarp>
      <div className="taskHeader">
        <a href="https://github.com/Ma5ha/Rubicon" target="_blank">
          <h1 className="taskTitle">Rubicon task</h1>
        </a>
      </div>
    </FlexWarp>
  );
};

export default TaskTitle;
