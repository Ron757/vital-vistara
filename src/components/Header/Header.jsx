import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function Header() {
  return (
    <nav>
      <div className="container nav-container">
        <Link className='nav-logo' to ={'/'}>
          <h3> Vital <span>Vistara</span></h3>
        </Link>
        <ul className="nav-menu">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/Contact'}>Contact Us</Link></li>
        </ul>
        <button className='nav-toggle-button btn btn-primary'>
          <FaBars />
          <IoMdClose />
       </button>
      </div>
    </nav>
  )
}

export default Header
