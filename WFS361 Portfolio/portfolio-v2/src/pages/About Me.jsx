import React from "react";
import Header from "../Components/Reusable Components/Header";
import AboutSection from "../Components/About Me Components/AboutSection";
import LanguageList from "../Components/About Me Components/LanguageList";
import ContactInfo from "../Components/Reusable Components/Contact";
import Footer from "../Components/Reusable Components/Footer";
import "../Styles/AboutMe.css";

function AboutMe() {
    return (
        <div className="page-container">
            <Header />
            <main className="main-content">
                <AboutSection />
                <div className="divider"></div>
                <LanguageList />
                <div className="divider"></div>
                <ContactInfo />
            </main>
            <Footer />
        </div>
    );
}

export default AboutMe;