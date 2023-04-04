import React, { useEffect, useState } from "react";
import Taskcard from "../listcard/card";

const TaskList = () => {
  const [task, setTask] = useState([]);

  const fetchData = () => {
    fetch(" http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTask(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
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
