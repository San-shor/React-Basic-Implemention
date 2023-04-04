import React, { useState } from "react";

const Form = ({ fetchData }) => {
  const [title, setTitle] = useState("");
  const [done, setDone] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = {
      title: title,
      done: done,
    };
    fetch(" http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => fetchData(data));
    setTitle("");
    setDone("");
  }
  return (
    <div>
      <h1>Add Task</h1>
      <form onSubmit={handleSubmit}>
        <h2>Title</h2>
        <input
          name="title"
          type="text"
          placeholder="Add task name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <h2>Done</h2>
        <input
          type="checkbox"
          name="done"
          value={done}
          onChange={(e) => setDone(e.target.value)}
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
