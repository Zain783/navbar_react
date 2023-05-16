import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#f2f2f2', padding: '1rem' }}>
      <div className="logo" style={{ fontWeight: 'bold' }}>
        Logo
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
        <li>
          <a href="/" style={{ color: '#333', textDecoration: 'none' }}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" style={{ color: '#333', textDecoration: 'none' }}>
            About
          </a>
        </li>
        <li>
          <a href="/services" style={{ color: '#333', textDecoration: 'none' }}>
            Services
          </a>
        </li>
        <li>
          <a href="/contact" style={{ color: '#333', textDecoration: 'none' }}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;