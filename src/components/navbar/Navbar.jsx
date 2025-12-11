import React, { useState } from 'react';
import { Logo } from './Logo';
import { NavList } from './NavList';
import { MenuToggle } from './MenuToggle';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Logo close={close} />
        <NavList isOpen={isOpen} close={close} />
        <div className="nav-cta"><a href="#contact" className="btn-primary">Contact</a></div>
        <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      </div>
    </nav>
  );
};
export default Navbar;