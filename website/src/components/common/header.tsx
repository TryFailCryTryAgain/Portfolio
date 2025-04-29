import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t, i18n, ready } = useTranslation();
    const [currentLangIndex, setCurrentLangIndex] = useState(0);

    // Define supported languages and their display names
    const languages = [
        { code: 'en', name: 'Svenska' },
        { code: 'se', name: 'English' },
    ];

    const changeLanguage = (event) => {
        // Cycle to the next language
        const nextIndex = (currentLangIndex + 1) % languages.length;
        const nextLang = languages[nextIndex].code;

        // Change the language
        i18n.changeLanguage(nextLang);
        setCurrentLangIndex(nextIndex);

    };

    if (!ready) return <div>Loading translations...</div>;

    return (
        <header className="header">
            <h2>David Segerbo</h2>
            <nav className="nav-links">
                <span className="change_lang" onClick={changeLanguage}>{languages[currentLangIndex].name}</span> {/* implement i18next functionallity*/}
                <Link to="/">{t('home')}</Link>
                <Link to="/work">{t('work')}</Link>
                {/* Might add another About me page*/}
                <Link to="/contact">{t('contact')}</Link>
            </nav>
        </header>
    );
};

export default Header;