// Import useState hook from React
import { useState } from "react";

function Todo() {

  // task → current input value
  // setTask → function to change that input value
  const [task, setTask] = useState("");

  // list → array of tasks
  // setList → function to update that array
  const [list, setList] = useState([]);

  // Function to add a new task
  const addTask = () => {
    if (!task) return;            // If input is empty, do nothing

    // Add new task to list using spread operator
    // [...list, task] → creates a new array with old tasks + new one
    setList([...list, task]);

    setTask("");                  // Clear input after adding
  };

  // Function to delete a task
  const deleteTask = (index) => {
    // Keep all tasks except the one at given index
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Todo App</h2>

      {/* Controlled input field */}
      <input
        value={task}                      // Input value comes from state
        onChange={(e) => setTask(e.target.value)} // Update state on typing
        placeholder="Enter task"
      />

      {/* Button to add task */}
      <button onClick={addTask}>Add</button>

      <ul>
        {/* Loop through list array and show each task */}
        {list.map((item, index) => (
          <li key={index}>
            {item}

            {/* Delete button for each task */}
            <button onClick={() => deleteTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
