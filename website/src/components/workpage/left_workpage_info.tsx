import React from "react";
import { Link } from "react-router-dom";

const Left_Workpage_Info = () => {
    return (
        <div className="hero">
            <div className="workpage_container">
                <p className="tagline">Crafting Digital Experiences</p>
                <h1>My Portfolio</h1>
                <p className="intro">
                    A collection of my recent projects and case studies. 
                    Each piece represents a unique challenge and creative solution.
                </p>
                <div className="cta-buttons">
                    <button className="btn work-btn-primary">View Resume</button>
                    <Link className="btn contact-btn-secondary" to="/contact">Contact Me</Link>
                </div>
            </div>
        </div>
    );
};

export default Left_Workpage_Info;