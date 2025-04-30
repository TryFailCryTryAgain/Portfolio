import { useTranslation } from "react-i18next";

const about_me = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="about-stack">
                <h3>{t('about')}</h3>
                <div className="about-grid">
                    <div className="about-card">
                        <div className="about-icon">
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <span className="about-text">{t('about_me_text')}</span>
                        <span className="about-text">{t('about_me_text2')}</span> 
                        <span className="about-text">{t('about_me_text3')}</span>                       
                    </div>
                </div>
                <br/>
            </div>
        </>
    );
};

export default about_me;