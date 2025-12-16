import React from "react";
import { Link } from "react-router-dom";
import TaskItem from "../components/TaskItem";
import "../Styles/Home.css";

const Home = ({ tasks, onDelete, onToggle }) => (
  <div className="home">
    <h1>Welcome to Task Mate.!</h1><br />
    <center>
        <div className="tasks">
            <p className="title"> Your tasks:</p>

            {tasks.length === 0 ? 
                <p>No tasks added yet</p> : 
                tasks.map(task => <TaskItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />)
            }
            <br />
            <br />
        </div>
    </center>
   
   
    <Link to="/add"><button className="add" >+ Add New Task</button></Link>
  </div>
);

export default Home;
