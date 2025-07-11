import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './navbar.css';
import { useNavigate } from "react-router-dom";
import logo from '../../Assets/rfqlogo.png';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Hajj Packages', path: '/hajj' },
    { name: 'Services', path: '/service' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contactUs' },
  ];

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-logo" onClick={() => navigate('/')}> 
          <img src={logo} alt="Logo" />
        </div>
        <button className="navbar-toggler" type="button" onClick={handleMenuClick} aria-controls="navbarNav" aria-expanded={menuOpen} aria-label="Toggle navigation">
          <FaBars />
        </button>
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navItems.map((item, idx) => (
              <li className="nav-item" key={idx}>
                <a className="nav-link" onClick={() => { setMenuOpen(false); navigate(item.path); }}>{item.name}</a>
              </li>
            ))}
          </ul>
          <div className="navbar-icons">
            <button className="btn nav-contact-btn" onClick={() => navigate('/contactUs')}>Contact Now</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
