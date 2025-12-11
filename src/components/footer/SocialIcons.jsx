import React from 'react';
import { socialLinks } from './socialData';

export const SocialIcons = () => (
  <div className="social-row">
    {socialLinks.map(({ id, icon: Icon, href }) => (
      <a 
        key={id} 
        href={href} 
        className="social-icon-btn" 
        target="_blank" 
        rel="noreferrer"
        aria-label="Social Link"
      >
        <Icon size={18} strokeWidth={2} />
      </a>
    ))}
  </div>
);