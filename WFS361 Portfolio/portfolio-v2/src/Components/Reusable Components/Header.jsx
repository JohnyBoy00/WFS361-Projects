import React from "react";
import { Link } from 'react-router-dom';
import "../../Styles/Header.css"

function Header() {
  return (
    <header className="header">
      <div className="logo">JEAN VAN ECK</div>
      <nav className="navigation">
        <div className="nav-container">
          <ul className="nav-links">
            <li className="home">
              <Link to="/">HOME</Link>
            </li>
            <li className="about">
              <Link to="/About">ABOUT</Link>
            </li>
            <li className="projects">
              <Link to="/Projects">PROJECTS</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
