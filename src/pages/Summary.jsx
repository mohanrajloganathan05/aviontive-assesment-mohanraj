import React from "react";
import TaskItem from "../components/TaskItem";

const Summary = ({ tasks, onToggle, onDelete }) => {
  const pendingTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);

  return (
    <div>
      <h1>Task Summary</h1>

      <h2>Pending Tasks</h2>
      {pendingTasks.length ? pendingTasks.map(t => <TaskItem key={t.id} task={t} onToggle={onToggle} onDelete={onDelete} />) : <p>No pending tasks</p>}

      <h2>Completed Tasks</h2>
      {completedTasks.length ? completedTasks.map(t => <TaskItem key={t.id} task={t} onToggle={onToggle} onDelete={onDelete} />) : <p>No completed tasks</p>}
    </div>
  );
};

export default Summary;
