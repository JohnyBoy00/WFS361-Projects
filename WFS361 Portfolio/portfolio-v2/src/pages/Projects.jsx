import React from "react";
import Header from "../Components/Reusable Components/Header";
import Footer from "../Components/Reusable Components/Footer";
import ContactInfo from "../Components/Reusable Components/Contact";
import Main from "../Components/Projects Components/MainContent";
import '../Styles/Projects.css';

function Projects() {
    return (
        <div className="projects-container">
            <Header />
            <Main />
            <ContactInfo/>
            <Footer />
        </div>
    )
}

export default Projects;