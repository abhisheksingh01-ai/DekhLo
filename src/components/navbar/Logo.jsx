import React from 'react';

export const Logo = ({ close }) => (
  <a href="/" className="navbar-logo" onClick={close}>
    DIGI<span className="text-teal">TECH</span>
  </a>
);