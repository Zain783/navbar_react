import React from 'react';
import logoImage from './images/logo.jpg';

function App() {
  return (
    <div>
      <nav>
        
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
          <li>
          <img src={logoImage} alt="Logo" height={40} width={60} />
          </li>
          <li>
            <a href="/" style={{ color: 'black', textDecoration: 'none' }}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" style={{ color: 'black', textDecoration: 'none' }}>
              Product
            </a>
          </li>
          <li>
            <a href="/services" style={{ color: 'black', textDecoration: 'none' }}>
             Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="upload-cv-page">
        <h1>Upload Resume</h1>
        <form className="cv-form">
          <input type="file" className="file-input" />
          <button type="submit" className="upload-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
