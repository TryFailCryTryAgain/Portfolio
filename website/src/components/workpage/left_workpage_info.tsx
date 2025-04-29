import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Left_Workpage_Info = () => {
    const { t } = useTranslation();

    return (
        <div className="hero">
            <div className="workpage_container">
                <p className="tagline">Crafting Digital Experiences</p>
                <h1>My Portfolio</h1>
                <p className="intro">
                    {t('workpage_info')}
                </p>
                <div className="cta-buttons">
                    <Link className="btn work-btn-primary" to="/DavidSegerboCV.pdf" download="DavidSegerboCV.pdf" target="_blank">{t('my_resume')}</Link>
                    <Link className="btn contact-btn-secondary" to="/contact">{t('contactme')}</Link>
                </div>
            </div>
        </div>
    );
};

export default Left_Workpage_Info;