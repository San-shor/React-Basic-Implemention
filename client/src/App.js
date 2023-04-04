import TaskList from "./components/todoList/list";
import "./App.css";
import Form from "./components/Form/form";

function App() {
  return (
    <div className="App">
      <TaskList />
      <Form></Form>
    </div>
  );
}

export default App;
