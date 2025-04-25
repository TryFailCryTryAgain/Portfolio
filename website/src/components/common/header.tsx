import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <h2>David Segerbo</h2>
            <nav className="nav-links">
                <a href="#">English</a> {/* implement i18next functionallity*/}
                <a href="#">Work</a>
                <a href="#">About</a> {/* Might add another About me page*/}
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;