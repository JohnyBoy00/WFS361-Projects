import React from "react";
import LanguagesSection from "./LanguagesSection";
import HorizontalLine from '../../Images/horizontal-white-line.png';
import ProfilePic from '../../Images/profile-image.png';
import VerticalLine from '../../Images/white-line.png';
import GitHubIcon from '../../Assets/github-icon-2.svg';
import InstaIcon from '../../Assets/instagram-icon-2.svg';
import LinkedInIcon from '../../Assets/linkedin-icon-2.svg';

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <p className="about-description">
            Jean is a junior software developer and avid photographer with a
            passion for coding and taking captivating images.
          </p>
          <img
            src={HorizontalLine}
            alt="horizontal white line"
            className="divider-image"
          />
          <div className="about-studying">
            <p className="studying-text">
              I am currently studying web development and software development
            </p>
            <div className="icons-container">
              <a
                href="https://www.instagram.com/_jeanvaneck/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={InstaIcon}
                  alt="Instagram Icon"
                  className="icons"
                />
              </a>
              <a
                href="https://github.com/JohnyBoy00"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={GitHubIcon}
                  alt="GitHub Icon"
                  className="icons"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/jean-van-eck-70244b247"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn Icon"
                  className="icons"
                />
              </a>
            </div>
          </div>
          <a href="/CV_1.pdf" download>
          <button className="download-cv">Download CV</button>
          </a>
        </div>
        <div className="about-photo">
          <img
            src={ProfilePic}
            alt="Jean van Eck"
            className="profile-image"
          />
        </div>
      </div>
      <img
        src={VerticalLine}
        alt=""
        className="languages-separator"
      />
      <p className="languages-text">Languages I've worked with</p>
      <LanguagesSection />
    </section>
  );
}

export default AboutSection;
