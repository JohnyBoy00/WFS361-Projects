import React from "react";
import '../../Styles/Contact.css'

function ContactInfo() {
    return (
        <div className="contact-info">
            <div className="contact-info-details">
                <h1 className="contact-header-title">CONTACT</h1>
                <div className="contact-info-content">
                    <div className="contact-info-left">
                        <div className="contact-info-title">Let's Work Together!</div>
                    </div>
                    <div className="contact-info-right">
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
        </div>
    );
}

export default ContactInfo;
