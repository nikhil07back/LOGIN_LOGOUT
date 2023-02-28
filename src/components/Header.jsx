import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { logout } from '../features/auth/authSlice'

function Header() {


  const {user} = useSelector((state)=>state.auth)

  const dispatch = useDispatch() 

  const handleclick = () => { 
    dispatch(logout())

  } 


  return (
    <header className="header">
      <div className="logo">
        <a to="/">Support Desk</a>
      </div>
      <ul>
        { 

        user ? 
        
        <li>
        <button className="btn" onClick={handleclick}
        >Logout</button>
      </li>
      : 
      <>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </>
        }
       
      </ul>
    </header>
  )
}

export default Header
