import React from "react";
import { Link } from "react-router-dom";

const Left_Homepage_Info = () => {
    return (
        <div className="hero">
            <p className="tagline">Turning Ideas into Digital Reality</p>
            <h1>Fullstack Developer Open Source</h1>
            <p className="intro">
                I specialize in transforming complex problems into elegant, 
                scalable solutions. With expertise across the entire stack, 
                I bridge the gap between beautiful interfaces and robust systems.
            </p>
            <div className="cta-buttons">
                <button className="btn work-btn-primary">View My Work</button> {/* Add Link function */}
                <Link className="btn contact-btn-secondary" to="/contact">Contact Me</Link>
            </div>
        </div>
    );
};

export default Left_Homepage_Info;