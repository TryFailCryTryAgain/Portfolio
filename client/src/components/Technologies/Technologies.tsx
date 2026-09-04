import style from './Technologies.module.css';
import astro from '../../assets/tabler_brand-astro.png';
import vite from '../../assets/tabler_brand-vite.png';
import vercel from '../../assets/tabler_brand-vercel.png';
import typescript from '../../assets/tabler_brand-typescript.png';
import netlify from '../../assets/Netlify.png';

function Technologies() {
    return (
        <>

            <p className={style.title}>Technologies</p>

            <br />

            <div className={style.tech_wrapper}>
                <div className={style.tech}>
                    <i className="fab fa-react"></i>
                    React
                </div>
                <div className={style.tech}>
                    <i className="fab fa-docker"></i>
                    Docker
                </div>
                <div className={style.tech}>
                    <i className="fab fa-html5"></i>
                    HTML
                </div>
                <div className={style.tech}>
                    <i className="fab fa-css3-alt"></i>
                    CSS
                </div>
                <div className={style.tech}>
                    <i className="fab fa-sass"></i>
                    Sass
                </div>
                <div className={style.tech}>
                    <i className="fab fa-angular"></i>
                    Angular
                </div>
                <div className={style.tech}>
                    <i className="fab fa-aws"></i>
                    AWS
                </div>
                <div className={style.tech}>
                    <i className="fab fa-js"></i>
                    JavaScript
                </div>
                <div className={style.tech}>
                    <img src={typescript} alt="typescript logo" />
                    Typescript
                </div>
                <div className={style.tech}>
                    <img src={vercel} alt="vercel Logo" />
                    Vercel
                </div>
                <div className={style.tech}>
                    <img src={netlify} alt="netlify Logo" />
                    Netlify
                </div>
                <div className={style.tech}>
                    <i className="fab fa-node-js"></i>
                    Nodejs
                </div>
                <div className={style.tech}>
                    <i className="fab"></i>
                    <img src={astro} alt="Astrojs Logo" />
                    Astrojs
                </div>
                <div className={style.tech}>
                    <img src={vite} alt="vite logo" />
                    Vite
                </div>
            </div>

        </>
    )
};

export default Technologies;