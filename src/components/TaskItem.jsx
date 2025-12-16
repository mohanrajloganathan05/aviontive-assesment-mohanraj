import React from "react";

const TaskItem = ({ task, onToggle, onDelete }) => (
  <div>
    <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
    <span>{task.title}</span>
    <button onClick={() => onDelete(task.id)}>Delete</button>
  </div>
);

export default TaskItem;


