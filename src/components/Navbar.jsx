import React from 'react'
import "../Styles/Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    
    <nav className='nav' >
        <h2>TaskMate</h2>

        <ul className='links'>
            <li className="link"><Link to="/">My Tasks</Link></li>
            <li className="link"><Link to="/add">Add Task</Link></li>
            <li className="link"><Link to="/summary">Summary</Link></li>
        </ul>
    </nav>
        
    </>
    
  )
}

export default Navbar