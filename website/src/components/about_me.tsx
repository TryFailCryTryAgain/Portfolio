import React from "react";
import { useTranslation } from "react-i18next";

const about_me = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="about-stack">
                <h3>About Me</h3>
                <div className="about-grid">
                    <div className="about-card">
                        <div className="about-icon">
                            <i className="fa-solid fa-user"></i>
                        </div>
                        {t('about_me_text')}
                    </div>
                </div>
                <br/>
            </div>
        </>
    );
};

export default about_me;