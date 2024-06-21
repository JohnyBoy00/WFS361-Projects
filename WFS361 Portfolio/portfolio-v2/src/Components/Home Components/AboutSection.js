import React from "react";

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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c56261d69302d778f3a0019cb023ed2829a8d3ed1136d36e216a6df54c7a3894?apiKey=051fe626959043f59078f8867e7b113b&"
            alt="Placeholder"
            className="divider-image"
          />
          <div className="about-studying">
            <p className="studying-text">
              I am currently studying web development and software development
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/55e1fed1d9c6b12dcb646967de8179fb1a000487b4f96e1de82d744945ad357b?apiKey=051fe626959043f59078f8867e7b113b&"
              alt="Placeholder"
              className="studying-image"
            />
          </div>
          <button className="download-cv">Download CV</button>
        </div>
        <div className="about-photo">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e93b1883a0e2592dd3711bd485136eb7986d3f837a637ba1e240bcacac98218?apiKey=051fe626959043f59078f8867e7b113b&"
            alt="Jean van Eck"
            className="profile-image"
          />
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e1bb009f5f0ef60e3480ed905452466832e0772ff4f6bd92aecc5dca364b3f4?apiKey=051fe626959043f59078f8867e7b113b&"
        alt=""
        className="languages-separator"
      />
      <p className="languages-text">Languages I've worked with</p>
    </section>
  );
}

export default AboutSection;
