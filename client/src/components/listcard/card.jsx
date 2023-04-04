import React from "react";
import './card.css'
const Taskcard = ({ list }) => {
  return (
    <div className="list-card">
      <h2 className="title">{list.title}</h2>
      <h3 className="author">{list.author_surname}</h3>
      {list.favorite &&
       <h3>♥</h3>}
    </div>
  );
};

export default Taskcard;
