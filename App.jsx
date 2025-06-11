import React, { useState } from "react";
import "./App.css";
import TodoItem from "./TodoItem";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (task.trim() === "") return;
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, task]);
    }
    setTask("");
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div className="app">
      <h1>TODO LIST</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="add item . . ."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>{editIndex !== null ? "Update" : "Add"}</button>
      </div>
      <div className="todo-list">
        {tasks.map((item, index) => (
          <TodoItem
            key={index}
            task={item}
            onDelete={() => handleDelete(index)}
            onEdit={() => handleEdit(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
