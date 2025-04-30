import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Left_Homepage_Info = () => {
    const { t } = useTranslation();

    return (
        <div className="hero">
            <p className="tagline">Turning Ideas into Digital Reality</p>
            <h1>Fullstack Developer</h1>
            <p className="intro">
                {t('homepage_info')}
            </p>
            <div className="cta-buttons">
                <Link className="btn work-btn-primary" to="/work">{t('myWork')}</Link>
                <Link className="btn contact-btn-secondary" to="/contact">{t('contactme')}</Link>
            </div>
        </div>
    );
};

export default Left_Homepage_Info;