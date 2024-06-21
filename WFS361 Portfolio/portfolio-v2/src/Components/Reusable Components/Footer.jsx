import React from "react";
import { Link } from 'react-router-dom';
import '../../Styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-about">
          <h3 className="footer-title">ABOUT</h3>
          <Link to="/about" className="footer-link">
            About Jean
          </Link>
          <a 
            href="https://www.instagram.com/_jeanvaneck/"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/jean-van-eck-70244b247"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>
        <div className="footer-work">
          <h3 className="footer-title">WORK</h3>
          <Link to="/projects" className="footer-link">
            Projects
          </Link>
        </div>
      </div>
      <div className="footer-separator" />
      <p className="footer-copyright">
        ©2022 Jean van Eck. All Rights Reserved.
        <br />
      </p>
    </footer>
  );
}

export default Footer;
