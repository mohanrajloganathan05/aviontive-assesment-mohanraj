import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AddTask from "./pages/AddTask";
import Summary from "./pages/Summary"; 

function App() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)), [tasks]);

  const addTask = (task) => setTasks((prev)=>{
      return [...prev,task]
  });

  const deleteTask = (id) => setTasks((prev) => prev.filter((t) => t.id !== id));

  const toggleComplete = (id) =>
  setTasks((prev) =>
    prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
  );

  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} />} />
        <Route path="/add" element={<AddTask onAdd={addTask} />} />
        <Route path="/summary" element={<Summary tasks={tasks} onToggle={toggleComplete} onDelete={deleteTask} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
