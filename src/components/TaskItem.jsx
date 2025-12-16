import React from "react";
import "../Styles/TaskItem.css";

const TaskItem = ({ task, onToggle, onDelete }) => (
  <div className="items"> 
    <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
    <span>{task.title}</span>
    <button className="delete" onClick={() => onDelete(task.id)}>Delete</button>
  </div>
);

export default TaskItem;


