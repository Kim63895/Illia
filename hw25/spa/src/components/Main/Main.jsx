import { useState } from "react";

const Main = () => {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTask([...task, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">To-Do List</h1>
        <form onSubmit={handleSubmit} className="d-flex mb-4">
          <input
            value={inputValue}
            onChange={handleChange}
            type="text"
            className="form-control me-2"
            placeholder="Add new task"
            id="todo-text"
            required
          />
          <button className="btn btn-primary" type="submit" id="add-task">
            Add Task
          </button>
        </form>
        <ul id="taskList" className="list-group">
        <li>-Here is your to do list</li>
          {task.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Main;
