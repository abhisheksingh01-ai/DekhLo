import React from 'react';
import { services } from './serviceData';
import { company, resources } from './companyData';
import { LinkColumn } from './LinkColumn';
import { SocialIcons } from './SocialIcons';
import { Send } from 'lucide-react'; 
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      
      {/* Brand & Newsletter Section */}
      <div className="brand-col">
        <h3 className="brand-logo">DIGI<span className="text-teal">TECH</span></h3>
        <p className="brand-desc">
          We craft digital experiences that drive growth and innovation.
        </p>
        
        <div className="newsletter-wrapper">
            <p>Subscribe to our newsletter</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="newsletter-input" 
              />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                  <Send size={18} />
              </button>
            </form>
        </div>

        <SocialIcons />
      </div>

      {/* Links Section */}
      {/* On mobile, these will now form a tidy 2x2 grid instead of a long list */}
      <LinkColumn title="Services" links={services} />
      <LinkColumn title="Company" links={company} />
      <LinkColumn title="Resources" links={resources} />
      
    </div>

    <div className="copy-row">
      <p>&copy; {new Date().getFullYear()} Texor <span>Lab</span>. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;