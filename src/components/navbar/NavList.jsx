import React from 'react';
import { NAV_LINKS } from './navData';

export const NavList = ({ isOpen, close }) => (
  <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
    {NAV_LINKS.map((link) => (
      <li className="nav-item" key={link.label}>
        <a href={link.href} className="nav-link" onClick={close}>{link.label}</a>
      </li>
    ))}
    <li className="nav-item mobile-cta">
      <a href="#contact" className="btn-primary" onClick={close}>Get Consultation</a>
    </li>
  </ul>
);