import React from "react";
import { ReactComponent as Tick } from "../../tick.svg";
const Taskcard = ({ list }) => {
  return (
    <div className="list-card">
      <h2>{list.title}</h2>
    </div>
  );
};

export default Taskcard;
