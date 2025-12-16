import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onAdd({ id: Date.now(), title, completed: false });
    setTitle("");
    navigate("/");
  };

  return (
    <div>
      <h1>Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Task title" value={title} onChange={e => setTitle(e.target.value)}  />
        <button type="submit" >Save Task</button>
      </form>
    </div>
  );
};

export default AddTask;
