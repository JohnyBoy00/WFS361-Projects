import React from "react";

function ContactInfo() {
    return (
        <div className="contact-info">
            <div className="contact-info-details">
                <div className="contact-info-title">Let's Work Together!</div>
                <div className="contact-info-content">
                    <p>jeanvaneck031011@gmail.com</p>
                    <p>062-589-8206</p>
                    <a 
                        href="https://www.linkedin.com/in/jean-van-eck-70244b247"
                        className="contact-info-link"
                        >
                          Linkedin
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;