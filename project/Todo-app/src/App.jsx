import React, { useState, useEffect } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editindex, setEditindex] = useState(null);
  const [edittext, setEdittext] = useState("");
// for adding task
  const addTask = () => {
    if (task.trim() === "") return;

    setTodos([...todos, { text: task, completed: false }]);
    setTask("");
  };

  // for delete task
  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
// for toggle task
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // for local storage
useEffect(() => {
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  setTodos(savedTodos);
  setLoading(false);
}, []);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

// for edit task
const startEdit = (index) => { 
  setEditindex(index);
  setEdittext(todos[index].text);
};

const saveEdit = () => {
  if (edittext.trim() === "") return;

  const newTodos = [...todos];
  newTodos[editindex].text = edittext;
  setTodos(newTodos);
  setEditindex(null);
  setEdittext("");
};

   if (loading) {
  return (
    <div className="text-center mt-10 text-xl font-bold">
      Loading...
    </div>
  );
}

  return (
    <div className="w-1/2 mx-auto bg-blue-300 p-5 rounded mt-9">
      <h1 className="text-xl font-bold mb-3 text-center">Todo App</h1>
      <hr></hr>

      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="p-2 mr-2 border-2 mt-1"
      />

      <button onClick={addTask} className="bg-black text-white px-3 py-1 " >
        Add
      </button>

      <ul className="mt-4">
        {todos.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span
              onClick={() => toggleComplete(index)}
              className={`cursor-pointer ${
                item.completed ? "line-through" : ""
              }`}
            >
              {item.text}
            </span>

              <button onClick>Edit</button>
            <button
              onClick={() => deleteTask(index)}
              className="bg-red-500 text-white px-2 py-1"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      
    </div>
  );
 
}