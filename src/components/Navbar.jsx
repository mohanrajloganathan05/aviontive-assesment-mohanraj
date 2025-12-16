import React from 'react'
import "../Styles/Navbar.css"
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
    
    <nav className='nav' >
        <h2 onClick={()=> navigate("/")}>TaskMate</h2>

        <ul className='links'>
            <li ><Link to="/" className="link">My Tasks</Link></li>
            <li ><Link to="/add" className="link">Add Task</Link></li>
            <li><Link to="/summary" className="link">Summary</Link></li>
        </ul>
    </nav>
        
    </>
    
  )
}

export default Navbar