import React,{ useEffect, useState } from "react";
import TaskList from "./components/todoList/list";
import "./App.css";
import Form from "./components/Form/form";

function App() {
  const [task, setTask] = useState([]);
  const fetchData = () => {
    fetch(" http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => {
        const sortedBooks = data.sort((a, b) =>
        a.author_surname.localeCompare(b.author_surname)
      );
        
        setTask(sortedBooks);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <TaskList task={task}  />
      <Form fetchData={fetchData}></Form>
    </div>
  );
}

export default App;
