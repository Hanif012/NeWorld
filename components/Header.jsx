import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    useEffect(() => {
        const handleScroll = () => {
            console.log('Scrolled!');
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup listener
        };
        }, []);
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">NeWorld</h1>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/countries">Countries</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;