import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Left_ContactPage_Info = () => {
    const { t } = useTranslation();

    return (
        <div className="hero">
            <p className="tagline">Let's Build Something Amazing</p>
            <h1>Get In Touch</h1>
            <p className="intro">
                {t('contactpage_info')}
            </p>
            <div className="cta-buttons">
                <Link className="btn work-btn-primary" to="/work">{t('myWork')}</Link>
                <Link className="btn contact-btn-secondary" to="/">{t('backHome')}</Link>
            </div>
        </div>
    );
};

export default Left_ContactPage_Info;