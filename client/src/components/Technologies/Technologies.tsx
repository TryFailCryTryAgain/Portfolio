import style from './Technologies.module.css';

function Technologies() {
    return (
        <>

            <p className={style.title}>Technologies</p>

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
                    <i className="fab"></i>
                    Typescript
                </div>
                <div className={style.tech}>
                    <i className="fab"></i>
                    Vercel
                </div>
                <div className={style.tech}>
                    <i className="fabs"></i>
                    Netlify
                </div>
                <div className={style.tech}>
                    <i className="fab fa-node-js"></i>
                    Nodejs
                </div>
            </div>

        </>
    )
};

export default Technologies;