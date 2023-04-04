import React from "react";
import Taskcard from "../listcard/card";
import './list.css'

const TaskList = ({task}) => {
 
  return (
    <div className="task-container">
      {task.map((list, i) => {
        return (
          <div key={i}>
            <Taskcard list={list} />
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
