import React from "react";
import { Link } from "react-router-dom";

const Left_ContactPage_Info = () => {
    return (
        <div className="hero">
            <p className="tagline">Let's Build Something Amazing</p>
            <h1>Get In Touch</h1>
            <p className="intro">
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you. Fill out the form or use my contact details.
            </p>
            <div className="cta-buttons">
                <button className="btn work-btn-primary">View My Work</button> {/* Add Link function */}
                <button className="btn contact-btn-secondary">Back Home</button> {/* Add Link function */}
            </div>
        </div>
    );
};

export default Left_ContactPage_Info;