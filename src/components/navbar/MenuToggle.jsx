import React from 'react';

export const MenuToggle = ({ isOpen, toggle }) => (
  <button className="menu-icon" onClick={toggle} aria-label="Toggle Menu">
    <span className={isOpen ? 'bar open' : 'bar'}></span>
    <span className={isOpen ? 'bar open' : 'bar'}></span>
    <span className={isOpen ? 'bar open' : 'bar'}></span>
  </button>
);