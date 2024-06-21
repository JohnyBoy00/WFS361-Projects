import React from "react";
import Header from "../Components/Reusable Components/Header";
import AboutSection from "../Components/About Me Components/AboutSection";
import ContactInfo from "../Components/Reusable Components/Contact";
import Footer from "../Components/Reusable Components/Footer";
import "../Styles/AboutMe.css";

function AboutMe() {
    return (
        <div className="aboutme-container">
            <Header />
            <main className="main-content">
                <h1 className="about-section-title">ABOUT ME</h1>
                <AboutSection />
                <div className="divider"></div>
                <ContactInfo />
            </main>
            <Footer />
        </div>
    );
}

export default AboutMe;
