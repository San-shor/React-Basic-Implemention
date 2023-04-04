import React, { useState } from "react";
import './form.css'

const Form = ({ fetchData }) => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [favorite,setFavorite] =useState(false)


  function favChange() {
    console.log('hiis');
  
    setFavorite(!favorite)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = {
      title: title,
      author_name: name,
      author_surname: surname,
      favorite:favorite
    };
    fetch(" http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => fetchData());
    setTitle("");
    setName("");
    setSurname("")
  }
  return (
    <div className="container">
      <h1>Add Book</h1>
      <form  onSubmit={handleSubmit} className="form">
        <h2>Title</h2>
        <input className="form-title"
          name="title"
          type="text"
          placeholder="Add task name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
         <input className="form-name"
          name="name"
          type="text"
          placeholder="Add author name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
         <input className="form-surname"
          name="surname"
          type="text"
          placeholder="Add author surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        ></input>
        <h2>Done</h2>
        <input
          type="checkbox"
          name="done"
          value={favorite} onChange={favChange}
        />
        <br />
        <button  type="submit" className="button" >Add</button>
      </form>
    </div>
  );
};

export default Form;
