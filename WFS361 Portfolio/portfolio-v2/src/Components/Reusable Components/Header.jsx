import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">JEAN VAN ECK</div>
      <nav className="navigation">
        <div className="nav-container">
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li className="home">
              <Link to="/" onClick={toggleNav}>
                HOME
              </Link>
            </li>
            <li className="about">
              <Link to="/About" onClick={toggleNav}>
                ABOUT
              </Link>
            </li>
            <li className="projects">
              <Link to="/Projects" onClick={toggleNav}>
                PROJECTS
              </Link>
            </li>
          </ul>
        </div>
        <button className="menu-icon" onClick={toggleNav}>
          {isOpen ? "☰" : "☰"}
        </button>
      </nav>
    </header>
  );
}

export default Header;