import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container'>
        <ul className='link'>
              <NavLink className={(e)=>{return e.isActive?"grey":""}} to="/"><li>Home</li></ NavLink>
              <NavLink className={(e)=>{return e.isActive?"grey":""}} to="/about"><li>About</li></ NavLink>
              <NavLink className={(e)=>{return e.isActive?"grey":""}} to="/contact"><li>Contact</li></ NavLink>
        </ul>
    </div>
  )
}

export default Navbar
