import { useState, useEffect } from "react";

export default function App() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const handleAdd = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  // Only for saving
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <div className=" p-5 w-1/2 my-6 mx-auto bg-blue-300">
      <h1 className="text-center decoration-1 text-2xl my-2">Todo List</h1>

      <input
        type="text"
        placeholder="Enter Task" 
        value={task}
        onChange={(e) => setTask(e.target.value)  } className="border-2 border-gray-800 mx-auto p-2 w-full mb-4"
      />

      <button onClick={handleAdd} className="bg-green-500 px-8 border-2 border-gray-400 text-white rounded-2xl mx-auto ms-60 ">Add</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            <span
              onClick={() => {
                const updated = [...tasks];
                updated[index].completed = !updated[index].completed;
                setTasks(updated);   // ✅ fixed
              }}
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {t.text}
            </span>

            <button
              onClick={() => {
                const newTasks = tasks.filter((_, i) => i !== index);
                setTasks(newTasks);
              }}
            className="bg-red-500 px-2 border-2 border-gray-400 text-white rounded-2xl mx-4">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}