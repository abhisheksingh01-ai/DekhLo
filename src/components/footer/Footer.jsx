import React from 'react';
import { services } from './serviceData';
import { company, resources } from './companyData'; // Using updated data
import { LinkColumn } from './LinkColumn';
import { SocialIcons } from './SocialIcons';
import { Send } from 'lucide-react'; // Icon for newsletter
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      
      {/* 1. Brand & Newsletter Column */}
      <div className="brand-col">
        <h3 className="brand-logo">DIGI<span className="text-teal">TECH</span></h3>
        <p className="brand-desc">
          We craft digital experiences that drive growth and innovation for forward-thinking businesses.
        </p>
        
        {/* Newsletter Input per UI Components [cite: 148] */}
        <div className="newsletter-wrapper">
            <p style={{fontSize: '14px', color: '#fff', marginBottom: '8px'}}>Subscribe to our newsletter</p>
            <form className="newsletter-form">
            <input 
                type="email" 
                placeholder="Enter email address" 
                className="newsletter-input" 
            />
            <button type="submit" className="newsletter-btn">
                <Send size={18} />
            </button>
            </form>
        </div>

        <SocialIcons />
      </div>

      {/* 2. Link Columns */}
      <LinkColumn title="Services" links={services} />
      <LinkColumn title="Company" links={company} />
      <LinkColumn title="Resources" links={resources} />
      
    </div>

    {/* Copyright Section [cite: 135] */}
    <div className="copy-row">
      <p>&copy; {new Date().getFullYear()} DigiTech. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;