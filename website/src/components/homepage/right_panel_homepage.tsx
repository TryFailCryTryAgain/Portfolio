import About_me from "../about_me";
import Header from "../common/header";
import { useTranslation } from "react-i18next";

const Right_Pannel_Homepage = () => {
    const { t } = useTranslation();

    return (
        <div className="right-panel">

            <Header />
            <About_me />
            
            <div className="tech-stack">
                <h3>{t('tech')}</h3>
                <div className="tech-grid">
                    <div className="tech-card">
                        <div className="tech-icon">
                            <i className="fab fa-react"></i>
                        </div>
                        <h4>React Ecosystem</h4>
                        <p>Next.js, React Hook Form, i18next, React Native</p>
                    </div>
                    <div className="tech-card">
                        <div className="tech-icon">
                            <i className="fas fa-server"></i>
                        </div>
                        <h4>Backend</h4>
                        <p>Node.js, Next.js, Express, PHP, Laravel</p>
                    </div>
                    <div className="tech-card">
                        <div className="tech-icon">
                            <i className="fas fa-database"></i>
                        </div>
                        <h4>Databases</h4>
                        <p>MariaDB, MySQL, MongoDB, Firebase</p>
                    </div>
                    <div className="tech-card">
                        <div className="tech-icon">
                            <i className="fab fa-js"></i>
                        </div>
                        <h4>JavaScript</h4>
                        <p>ES6+, TypeScript, Jquery, Web Components</p>
                    </div>
                    <div className="tech-card">
                        <div className="tech-icon">
                            <i className="fas fa-cloud"></i>
                        </div>
                        <h4>Cloud & DevOps</h4>
                        <p>AWS, Docker, CI/CD, Serverless, Herd</p>
                    </div>
                    <div className="tech-card">
                        <div className="tech-icon">
                            <i className="fas fa-magic"></i>
                        </div>
                        <h4>Design & UX/UI</h4>
                        <p>Figma, CSS, SCSS, Tailwind, Animation</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Right_Pannel_Homepage;