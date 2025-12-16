import React from "react";
import TaskItem from "../components/TaskItem";
import "../Styles/Summary.css";

const Summary = ({ tasks, onToggle, onDelete }) => {
  const pendingTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);

  return (
    <div className="summary-div">
          <h1>Task Summary</h1>
          <div className="details">
                  <div className="pending">
                    <h2>Pending Tasks</h2>
                    {pendingTasks.length ? pendingTasks.map(t => <TaskItem key={t.id} task={t} onToggle={onToggle} onDelete={onDelete} />) : <p>No pending tasks</p>}
                  </div>


                  <div className="completed">
                    <h2>Completed Tasks</h2>
                    {completedTasks.length ? completedTasks.map(t => <TaskItem key={t.id} task={t} onToggle={onToggle} onDelete={onDelete} />) : <p>No completed tasks</p>}
                  </div>
          </div>   
      </div>
  );
};

export default Summary;
