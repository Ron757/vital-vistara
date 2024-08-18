import React, { useEffect, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import Logo from "../../assets/Loges.png";
import WLogo from "../../assets/Logoso.png";
import "./Header.css";

function Header() {
  const [isHome, setIsHome] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Update isHome based on the current location path
  useEffect(() => {
    setIsHome(location.pathname === '/');
  }, [location.pathname]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav style={{ backgroundColor: isHome ? 'white' : 'black' }}>
      <div className="nav-container">
        <Link className='nav-logo' to={'/'}>
          <img src={isHome ? WLogo : Logo} alt="" className='Logobg' />
        </Link>
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li><Link to={'/'} style={{ color: isHome ? 'black' : 'white' }}>Home</Link></li>
          <li><Link to={'/'} style={{ color: isHome ? 'black' : 'white' }}>Services</Link></li>
          <li><Link to={'/about'} style={{ color: isHome ? 'black' : 'white' }}>About</Link></li>
          <li><Link to={'/'} style={{ color: isHome ? 'black' : 'white' }}>Career</Link></li>
          <li><Link to={'/contact'} style={{ color: isHome ? 'black' : 'white' }}>Contact Us</Link></li>
          <li><Link to={'/contact'} style={{ color: isHome ? 'white' : 'black', backgroundColor: isHome ? 'black' : 'white' }} className='above'>Book a Call</Link></li>
        </ul>
        <button className='nav-toggle-button btn btn-primary' onClick={handleMenuToggle}>
          {menuOpen ? <IoMdClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Header;
