import React from "react";
import { Link } from "react-router-dom";
import TaskItem from "../components/TaskItem";

const Home = ({ tasks, onDelete, onToggle }) => (
  <div style={{ padding: "20px" }}>
    <h1>Welcome...</h1>
    <p>Here are your tasks:</p>

    {tasks.length === 0 ? 
        <p>No tasks added yet</p> : 
        tasks.map(task => <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />)
    }

    <Link to="/add"><button >+ Add New Task</button></Link>
  </div>
);

export default Home;
