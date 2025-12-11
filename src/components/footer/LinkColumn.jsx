import React from 'react';

export const LinkColumn = ({ title, links }) => (
  <div className="footer-col">
    <h4>{title}</h4>
    <ul className="col-list">
      {links.map((link) => (
        <li key={link.id}>
          <a href={link.href} className="col-link">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);