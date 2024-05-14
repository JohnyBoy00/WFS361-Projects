import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-about">
          <h3 className="footer-title">ABOUT</h3>
          <p className="footer-link">About Jean</p>
          <p className="footer-link">Instagram</p>
          <p className="footer-link">Linkedin</p>
        </div>
        <div className="footer-work">
          <h3 className="footer-title">WORK</h3>
          <p className="footer-link">Projects</p>
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