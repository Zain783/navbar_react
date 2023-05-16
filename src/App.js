import React from 'react';
import Navbar from './Navbar';
import UploadCVPage from './uploadcvpage';
import logoImage from './images/logo.jpg';
function App() {
  return (
    <div>
      <nav style={{ backgroundColor: 'black', padding: '1rem' }}>
        <div className="logo">
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
          <li><img src={logoImage} alt="Logo" height={40} width={60} /></li>
          <li>
            <a href="/" style={{ color: 'white', textDecoration: 'none' }}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>
              About
            </a>
          </li>
          <li>
            <a href="/services" style={{ color: 'white', textDecoration: 'none' }}>
              Services
            </a>
          </li>
          <li>
            <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="upload-cv-page" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ marginBottom: '1rem' }}>Upload CV</h1>
        <form className="cv-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input type="file" className="file-input" style={{ marginTop: '1rem' }} />
          <button type="submit" className="upload-button" style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Upload</button>
        </form>
      </div>

    </div>
  );
}

export default App;
